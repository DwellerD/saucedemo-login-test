import { $ } from '@wdio/globals';
import Page from './basepage.js';

class SauceLogin extends Page {
  users = [
    { username: 'standard_user', password: 'secret_sauce', shouldPass: true },
    { username: 'locked_out_user', password: 'secret_sauce', shouldPass: false },
    { username: 'problem_user', password: 'secret_sauce', shouldPass: true },
    { username: 'performance_glitch_user', password: 'secret_sauce', shouldPass: true },
    { username: 'error_user', password: 'secret_sauce', shouldPass: true },
    { username: 'visual_user', password: 'secret_sauce', shouldPass: true },

    { username: 'standard_user', password: 'wrong_password', shouldPass: false },
    { username: 'locked_out_user', password: 'wrong_password', shouldPass: false },
    { username: 'problem_user', password: 'wrong_password', shouldPass: false },
    { username: 'performance_glitch_user', password: 'wrong_password', shouldPass: false },
    { username: 'error_user', password: 'wrong_password', shouldPass: false },
    { username: 'visual_user', password: 'wrong_password', shouldPass: false }
  ];

  get usernameInput() { return $('#user-name'); }
  get passwordInput() { return $('#password'); }
  get loginButton() { return $('#login-button'); }
  get errorContainer() { return $('.error-message-container'); }

  async login(username, password) {
    await this.open();
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
  }

  async isErrorVisible() {
    return this.errorContainer.isDisplayed();
  }
}

export default new SauceLogin();
