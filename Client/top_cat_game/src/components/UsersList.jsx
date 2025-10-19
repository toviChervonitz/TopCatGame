import * as React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
} from "@mui/material";
import { purple, green } from "@mui/material/colors";

export default function UserList({ data = [] }) {
  if (!data.length) {
    return <Typography variant="h6">No Information</Typography>;
  }

  return (
    <Box sx={{ mt: 2 }}>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 380,
          overflow: "auto",
          borderRadius: 2,
          boxShadow: 4,
          backgroundColor: '#ffffffff',
          "&::-webkit-scrollbar": { width: 8 },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor:'#0eb3a5ff',
            borderRadius: 8,
          },
        }}
      >
        <Table stickyHeader aria-label="users table" size="small">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: '#0eb3a5ff',
                  color: "#fff",
                  fontWeight: 700,
                }}
              >
                Rank
              </TableCell>
              <TableCell
                sx={{ backgroundColor: '#0eb3a5ff', color: "#fff", fontWeight: 700 }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{ backgroundColor: '#0eb3a5ff', color: "#fff", fontWeight: 700 }}
                align="center"
              >
                Image
              </TableCell>
              <TableCell
                sx={{ backgroundColor: '#0eb3a5ff', color: "#fff", fontWeight: 700 }}
                align="right"
              >
                Score
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((user) => (
              <TableRow
                key={user.id}
                hover
                sx={{
                  "&:not(:last-of-type) td": {
                    borderBottom: "1px solid '#0eb3a5ff'",
                  },
                }}
              >
                <TableCell sx={{ color: '#0eb3a5ff', fontWeight: 600 }}>
                  {user.rank}
                </TableCell>

                <TableCell sx={{
                  color: '#0eb3a5ff',
                }}>
                  {user.name}
                </TableCell>

                <TableCell align="center">
                  <Avatar
                    src={user.image}
                    alt={user.name}
                    sx={{ width: 44, height: 44, mx: "auto" }}
                  />
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ color: '#0eb3a5ff', fontWeight: 700 }}
                >
                  {user.score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box >
  );
}

