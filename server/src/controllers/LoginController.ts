import { Request, Response } from 'express';
import { Controller } from './decorators/controller';
import { Get } from './decorators/routes';


@Controller('')
class LoginController {

  @Get('/login')
  getLogin(req: Request, res: Response): void {
    // if (req.session && req.session.loggedIn) {
    //   res.redirect('/');
    // }

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


}
