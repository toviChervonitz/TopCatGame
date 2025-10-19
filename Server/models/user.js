const db = require('../services/db');

const UserModel = {

  create: async ({ name, image, score = 0 }) => {
    const { rows } = await db.query(
      `INSERT INTO users (name, image, score)
       VALUES ($1, $2, $3)
       RETURNING id, name, image, score`,
      [name, image, score]
    );
    return rows[0];
  },

  updateScore: async (id, score) => {
    const { rows } = await db.query(
      `UPDATE users SET score = $1
       WHERE id = $2
       RETURNING id, name, image, score`,
      [score, id]
    );
    return rows[0];
  },

  getTop: async (limit = 10) => {
    const { rows } = await db.query(
      `SELECT id, name, image, score
       FROM users
       ORDER BY score DESC, id ASC
       LIMIT $1`,
      [limit]
    );
    return rows;
  },

  getAllWithRank: async () => {
    const { rows } = await db.query(
      `SELECT id, name, image, score,
              RANK() OVER (ORDER BY score DESC, id ASC) AS rank
       FROM users`
    );
    return rows;
  },

  getUserWithNeighbors: async (userId, neighbors = 5) => {
    const { rows } = await db.query(
      `
      WITH ranked AS (
        SELECT id, name, image, score,
               RANK() OVER (ORDER BY score DESC, id ASC) AS rank
        FROM users
      ),
      me AS (
        SELECT rank FROM ranked WHERE id = $1
      )
      SELECT r.*
      FROM ranked r, me
      WHERE r.rank BETWEEN GREATEST(me.rank - $2, 1) AND me.rank + $2
      ORDER BY r.rank ASC;
      `,
      [userId, neighbors]
    );

    const me = rows.find(r => r.id === Number(userId));
    return { me, around: rows };
  }
};

module.exports = UserModel;
