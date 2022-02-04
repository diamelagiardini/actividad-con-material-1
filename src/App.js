import "./App.css";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { pink } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Box from '@mui/material/Box';
const App = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:10}}
    >
      <Card sx={{ maxWidth: 350 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: pink[500] }}>D</Avatar>
          <Typography variant="h5" component="h5">
            Sign up
          </Typography>
        </CardContent>

        <CardContent>
          <Stack direction="row" spacing={3}>
            <TextField
              required
              label="First Name"
              variant="outlined"
            ></TextField>
            <TextField
              required
              label="Last Name"
              variant="outlined"
            ></TextField>
          </Stack>
        </CardContent>
        <CardContent>
          <Stack direction="column" spacing={2}>
            <TextField
              required
              label="Email Address"
              variant="outlined"
            ></TextField>
            <TextField required label="Passrrow" variant="outlined"></TextField>
          </Stack>
        </CardContent>
        <CardContent>
          <Stack direction="row">
            <Checkbox></Checkbox>
            <Typography variant="caption" display="block" gutterBottom>
              I want to receive inspiration, marketing promotions and updates
              via email.
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button sx={{ width: 350 }} variant="contained">
            Sing Up
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default App;
