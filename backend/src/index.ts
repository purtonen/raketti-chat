import 'dotenv/config';

import express from 'express';
import chatRouter from 'chat/router';
import userRouter from 'user/router';
import messageRouter from 'message/router';

const app = express();
const port = process.env.PORT || 3000;

app.use(chatRouter);
app.use(messageRouter);
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});