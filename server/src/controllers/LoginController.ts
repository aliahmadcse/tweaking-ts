import { Request, Response } from 'express';
import { BodyValidator, Controller, Get, Post } from './decorators';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined; };
}

@Controller('/auth')
class LoginController {

  @Get('/login')
  getLogin(req: Request, res: Response): void {
    if (req.session && req.session.loggedIn) {
      res.redirect('/');
    }

    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
      `);
  }


  @Post('/login')
  @BodyValidator('email', 'password')
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
      // mark this person as logged in
      req.session = { loggedIn: true };
      // redirect them to the root route
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  };

  @Get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }

}
