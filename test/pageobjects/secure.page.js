import { $ } from '@wdio/globals';
import Page from './page.js';

class SecurePage extends Page {
  get shoppingCartIcon() {
    return $('.shopping_cart_link');
  }

  get appLogo() {
    return $('.app_logo');
  }
}

export default new SecurePage();
