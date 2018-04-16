import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MessagingService} from '@app/core/messaging.service';
import {SideNavSetter, ToggleSideNav} from '@app/core/shell/header/header.messages';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  sideNavOpened = false;
  mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;
  private _messageSubscription:  Subscription;

  navItems = [
    { link: 'home', label: 'Home', icon: 'home' },
    { link: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { link: 'medialibrary', label: 'Media Library', icon: 'perm_media' },
    { link: 'devices', label: 'Device', icon: 'important_devices' },
    { label: 'Content', icon: 'grains',
      items: [
        { link: 'layouts', label: 'Layout', icon: 'picture_in_picture' },
        { link: 'presentations', label: 'Presentation', icon: 'featured_play_list' },
        { link: 'playlist', label: 'Playlist', icon: 'playlist_play' },
        { link: 'scheduling', label: 'Scheduling', icon: 'date_range' },
        { link: 'planning', label: 'Planning', icon: 'assignment' }
      ]
    },
    { link: 'campaign', label: 'Campaign', icon: 'adjust' },
    { link: 'apps', label: 'App Integration', icon: 'widgets' },
    { link: 'reports', label: 'Reports', icon: 'web_asset' },
    { label: 'Administration', icon: 'settings',
      items: [
        { link: 'users', label: 'Users', icon: 'people' },
        { link: 'network', label: 'Network', icon: 'device_hub' }
      ]
    }
  ]

  ngOnInit() {
     this._messageSubscription = this.messagingService.of(SideNavSetter).subscribe(setter => {
         this.sideNavOpened = setter.isOpen;
     });
  }

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private messagingService: MessagingService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  sideNavClick(e: any){
    if (e.target.className.indexOf('mat-list-item') > -1 ) {
      this.closeSideNav();
    }
  }

  closeSideNav() {
      this.messagingService.publish(new SideNavSetter(false));
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this._messageSubscription.unsubscribe();
  }
}
