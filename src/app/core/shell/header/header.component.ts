import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { I18nService } from '../../i18n.service';
import {MessagingService} from '@app/core/messaging.service';
import {SideNavSetter, ToggleSideNav} from '@app/core/shell/header/header.messages';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _messageSubscription: Subscription;
  menuHidden = true;
  private _menuExpanded = false;
  constructor(private router: Router,
              private messagingService: MessagingService,
              private authenticationService: AuthenticationService,
              private i18nService: I18nService) { }

  ngOnInit() {
    this._messageSubscription = this.messagingService.of(SideNavSetter).subscribe(setter => {
        this.menuExpanded = setter.isOpen;
    });
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }



  get menuExpanded(): boolean {
    return this._menuExpanded;
  }
  set menuExpanded(value: boolean){
    if (value !== this._menuExpanded){
      this._menuExpanded = value;
      if (value) {

      }
    }
  }
  toggleSideNav() {
    this.messagingService.publish(new SideNavSetter(!this.menuExpanded));
  }

  openSideNav() {
    this.messagingService.publish(new SideNavSetter(true));
  }

  ngOnDestroy(): void {
    this._messageSubscription.unsubscribe();
  }
}
