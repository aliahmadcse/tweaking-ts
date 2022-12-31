import { Request, Response, Router } from 'express';



export function requireAuth(req: Request, res: Response, next: Function): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not permitted');
}


const router = Router();

router.get('/', (req, res) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <div>You are not logged in</div>
        <a href="/login">Login</a>
      </div>
    `);
  }
});




router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});


router.get('/logout', (req: Request, res: Response) => {
  req.session = null;
  res.redirect('/');
});

export { router };
