import express from 'express';
import { json } from 'body-parser';
import { signIn } from './routes/signIn';
import { signOut } from './routes/signOut';
import { signUp } from './routes/signUp';
import { currentuser } from './routes/current-user';


const app = express();
app.use(json());

app.use(signIn);
app.use(signOut);
app.use(signUp);
app.use(currentuser);


app.listen(3000, () => {
    console.log('listening on port 3000!!!')
})