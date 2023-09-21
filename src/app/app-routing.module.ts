import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PanelsComponent } from './layouts/modal/panels/panels.component';
import { EditPanelComponent } from './layouts/modal/panels/edit-panel/edit-panel.component';
import { AddPanelComponent } from './layouts/modal/panels/add-panel/add-panel.component';
import { TablesComponent } from './tables/tables.component';
import { AttestationComponent } from './tables/attestation/attestation.component';
import { AuthGuard } from './utility/app.guard';
import { DocViewComponent } from './layouts/doc-view/doc-view.component';
import { InstallComponent } from './install/install.component';
import { HomeComponent } from './home/home.component';
import { KeycloakloginComponent } from './authentication/login/keycloaklogin.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { SearchComponent } from './discovery/search/search.component';
import { DocumentsComponent } from './documents/documents.component';
import { AddDocumentComponent } from './documents/add-document/add-document.component';
import { ScanQrCodeComponent } from './documents/scan-qr-code/scan-qr-code.component';
import { BrowseDocumentsComponent } from './documents/browse-documents/browse-documents.component';
import { PagesComponent } from './pages/pages.component';
import { DocDetailViewComponent } from './documents/doc-detail-view/doc-detail-view.component';
import { CreateCertificateComponent } from './create-certificate/create-certificate.component';
import { FaqComponent } from './custom-components/faq/faq.component';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { LoginComponent } from './login/login.component';
import { ManageEnrollmentConflictComponent } from './manage-enrollment-conflict/manage-enrollment-conflict.component';
import { SetUsernameComponent } from './set-username/set-username.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationGuard } from './utility/authentication.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { OauthCallbackComponent } from './oauth-callback/oauth-callback.component';
import { SearchCertificatesComponent } from './search-certificates/search-certificates.component';
import { EkycComponent } from './ekyc/ekyc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterComponent } from './register/register.component';
import { OpportuntiesComponent } from './opportunties_dynamic/opportunties.component';
import { OpportunitieComponent } from './opportunitie/opportunitie.component';
import { AadharKycComponent } from './aadhar-kyc/aadhar-kyc.component';
import { AccountComponent } from './account/account.component';
import { WalletWorkerComponent } from './wallet-worker/wallet-worker.component';
import { WalletUiGetComponent } from './wallet-ui-get/wallet-ui-get.component';

const routes: Routes = [
  {
    path: '',
    component: OnBoardingComponent,
    data: {
      showToolbar: false,
      telemetry: {
        env: 'onboarding', pageid: 'onboarding-page', type: 'view', subtype: 'scroll'
      }
    }
  },
  {
    path: 'login',
    component: KeycloakloginComponent,
    canActivate: [AuthGuard],
    data: {
      showToolbar: false,
      telemetry: {
        env: 'login', pageid: 'login', type: 'edit', subtype: 'scroll'
      }
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      showToolbar: false,
      telemetry: {
        env: 'register', pageid: 'register', type: 'edit', subtype: 'scroll'
      }
    }
  },
  {
    path: 'opportunties',
    component: OpportuntiesComponent,
    data: {
      showToolbar: false,
      telemetry: {
        env: 'opportunities', pageid: 'opportunities', type: 'edit', subtype: 'scroll'
      }
    }
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      showToolbar: true,
      telemetry: {
        env: 'settings', pageid: 'settings', type: 'view', subtype: 'scroll'
      }
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: BrowseDocumentsComponent,
    data: {
      showToolbar: true,
      telemetry: {
        env: 'home', pageid: 'home', type: 'list', subtype: 'scroll'
      },
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'opportunities',
    component: OpportunitieComponent,
    data: {
      showToolbar: true,
      telemetry: {
        env: 'home', pageid: 'home', type: 'list', subtype: 'scroll'
      },
    },
    canActivate: [AuthGuard]
  },
  // {
  //   path: 'aadhaar-kyc',
  //   component: AadharKycComponent,
  //   data: {
  //     showToolbar: false,
  //     telemetry: {
  //       env: 'home', pageid: 'home', type: 'list', subtype: 'scroll'
  //     },
  //   },
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'search-certificates',
    component: SearchCertificatesComponent,
    data: {
      showToolbar: true,
      telemetry: {
        env: 'search', pageid: 'search', type: 'list', subtype: 'scroll'
      },
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'doc-view',
    component: DocViewComponent,
    data: {
      showToolbar: false,
      telemetry: {
        env: 'doc-view', pageid: 'doc-view', type: 'view', subtype: 'scroll'
      }
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'scan-code',
    component: ScanQrCodeComponent,
    data: {
      showToolbar: true,
      telemetry: {
        env: 'scan certificate', pageid: 'scan-code', type: 'view', subtype: 'scroll'
      }
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {
      showToolbar: false,
      telemetry: {
        env: 'dashboard', pageid: 'sign-out', type: 'view', subtype: 'scroll'
      }
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'settings/account',
    component: AccountComponent,
    data: {
      showToolbar: true,
      telemetry: {
        env: 'account', pageid: 'account', type: 'view', subtype: 'scroll'
      }
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'wallet-worker',
    component: WalletWorkerComponent,
    canActivate: [AuthGuard],
    data: {
      showToolbar: false,
      telemetry: {
        env: 'Wallet Worker', pageid: 'walletworker', type: 'view', subtype: 'scroll'
      }
    }
  },
  {
    path: 'wallet-worker/wallet-ui-get',
    component: WalletUiGetComponent,
    data: {
      showToolbar: false,
      telemetry: {
        env: 'Wallet Worker Get', pageid: 'walletworkerget', type: 'view', subtype: 'scroll'
      }
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
  // {
  //   path: 'digilocker-callback',
  //   component: OauthCallbackComponent,
  //   data: {
  //     telemetry: {
  //       env: 'sign-in', pageid: 'digilocker-callback', type: 'view', subtype: 'scroll'
  //     }
  //   }
  // },
  // {
  //   path: 'change-password',
  //   component: ChangePasswordComponent,
  //   data: {
  //     showToolbar: false,
  //   },
  //   canActivate: [AuthenticationGuard]
  // },
  // {
  //   path: 'ekyc',
  //   component: EkycComponent,
  //   data: {
  //     showToolbar: false,
  //     telemetry: {
  //       env: 'login', pageid: 'kyc', type: 'edit', subtype: 'scroll'
  //     }
  //   }
  // },
  // { path: 'manage-enrollment', component: ManageEnrollmentConflictComponent, data: { showToolbar: false } },
  // {
  //   path: 'set-username',
  //   component: SetUsernameComponent,
  //   data: {
  //     showToolbar: false,
  //     telemetry: {
  //       env: 'registration', pageid: 'set-username', type: 'view', subtype: 'scroll'
  //     },
  //   }
  // },
  // {
  //   path: 'register',
  //   component: RegistrationComponent,
  //   data: {
  //     showToolbar: false,
  //     telemetry: {
  //       env: 'registration', pageid: 'register', type: 'view', subtype: 'scroll'
  //     },
  //   }
  // },














  // Auth
  // { path: '', component: KeycloakloginComponent ,  canActivate: [AuthGuard]},
  // { path: 'logout', component: LogoutComponent },
  // // Forms
  // { path: 'form/:form', component: FormsComponent },
  // { path: 'form/:form/:id', component: FormsComponent, canActivate: [AuthGuard] },
  // Layouts
  // { path: ':layout', component: LayoutsComponent, canActivate: [AuthGuard] },
  // {
  //   path: 'profile/:layout', component: LayoutsComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'edit',
  //       component: PanelsComponent,
  //       outlet: 'claim',
  //       children: [
  //         {
  //           path: ':form',
  //           component: EditPanelComponent
  //         },
  //         {
  //           path: ':form/:id',
  //           component: EditPanelComponent
  //         }
  //       ]
  //     },
  //     {
  //       path: 'add',
  //       component: PanelsComponent,
  //       outlet: 'claim',
  //       children: [
  //         {
  //           path: ':form',
  //           component: AddPanelComponent
  //         }
  //       ]
  //     }
  //   ]
  // },

  // Pages
  // { path: 'page/:page', component: PagesComponent },

  // Tables
  // { path: ':entity/attestation/:table', component: TablesComponent, canActivate: [AuthGuard] },
  // { path: ':entity/attestation/:table/:id', component: AttestationComponent, canActivate: [AuthGuard] },
  // { path: ':entity/documents', component: DocumentsComponent, canActivate: [AuthGuard] },
  // { path: ':entity/documents/detail/:type/:id', component: DocDetailViewComponent, canActivate: [AuthGuard] },
  // { path: ':entity/documents/detail/:type/:id/view', component: DocViewComponent, canActivate: [AuthGuard] },
  // { path: 'doc-view', component: DocViewComponent, data: { showToolbar: false }, canActivate: [AuthenticationGuard] },
  // { path: ':entity/documents/browse', component: BrowseDocumentsComponent, canActivate: [AuthGuard] },
  // { path: ':entity/documents/browse', component: BrowseDocumentsComponent, data: { showToolbar: true }, canActivate: [AuthenticationGuard] },
  // { path: ':entity/documents/:type/add/:id', component: AddDocumentComponent, canActivate: [AuthGuard] },
  // { path: ':entity/documents/add/:type', component: AddDocumentComponent, canActivate: [AuthGuard] },
  // { path: ':entity/documents/add/:type/:id', component: AddDocumentComponent, canActivate: [AuthGuard] },
  // { path: ':entity/documents/scan/vc', component: ScanQrCodeComponent, canActivate: [AuthGuard] },
  // { path: 'scan-code', component: ScanQrCodeComponent, data: { showToolbar: false }, canActivate: [AuthenticationGuard] },
  // { path: 'document/detail', component: DocDetailViewComponent, canActivate: [AuthGuard] },
  // { path: 'document/view/:id', component: DocViewComponent, canActivate: [AuthGuard] },
  // { path: 'discovery', component: SearchComponent },
  // { path: 'template', component: CreateCertificateComponent },


  // Installation
  // { path: 'install', component: InstallComponent },

  // Custom
  // { path: 'faq', component: FaqComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
