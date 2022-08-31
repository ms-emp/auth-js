/* eslint-disable @typescript-eslint/naming-convention */

import { Log, Navigation, OIDCAuthSettings } from '@badisi/auth-js/oidc';
import { AuthSettings } from '@badisi/ngx-auth';
import { UserSettings } from 'demo-app-common';

export const DEFAULT_AUTH_JS_SETTINGS = (production = false): UserSettings<OIDCAuthSettings>[] => {
    const settings: UserSettings<OIDCAuthSettings>[] = [{
        name: 'Auth0',
        librarySettings: {
            authorityUrl: 'https://dev-fijd1e9x.us.auth0.com',
            clientId: 'kRVVEnAWKMpxxpcodl0TqLXfIHgQvmmt',
            schemeUri: 'demo-app',
            scope: 'openid profile email phone offline_access read:current_user',
            internal: {
                extraQueryParams: {
                    audience: 'https://dev-fijd1e9x.us.auth0.com/api/v2/'
                }
            },
            navigationType: Navigation.REDIRECT,
            logLevel: Log.NONE,
            loginRequired: false,
            loadUserSession: true,
            loadUserInfo: true,
            automaticSilentRenew: true
        }
    }];

    if (!production) {
        settings.push({
            name: 'Keycloak (local)',
            librarySettings: {
                authorityUrl: 'http://localhost:8080/auth/realms/demo',
                clientId: 'demo-app',
                schemeUri: 'demo-app',
                scope: 'openid profile email phone',
                navigationType: Navigation.REDIRECT,
                logLevel: Log.NONE,
                loginRequired: false,
                loadUserSession: true,
                loadUserInfo: true,
                automaticSilentRenew: true
            }
        });
    }

    return settings;
};

export const DEFAULT_NGX_AUTH_SETTINGS = (production = false): UserSettings<AuthSettings>[] => {
    const defaultAuthJsSettings = DEFAULT_AUTH_JS_SETTINGS(production);

    const settings: UserSettings<AuthSettings>[] = [{
        name: 'Auth0',
        otherSettings: {
            roles: 'view-profile',
            privateApiUrl: 'https://dev-fijd1e9x.us.auth0.com/api/v2/users/auth0|620573a0e0fb5b00693d8433',
            privateApiHeaders: ''
        },
        librarySettings: {
            ...defaultAuthJsSettings[0].librarySettings,
            authGuardRedirectUrl: '/forbidden',
            automaticLoginOn401: true,
            automaticInjectToken: true
        }
    }];

    if (!production) {
        settings.push({
            name: 'Keycloak (local)',
            otherSettings: {
                roles: 'view-profile',
                privateApiUrl: '/api/my-api',
                privateApiHeaders: ''
            },
            librarySettings: {
                ...defaultAuthJsSettings[1].librarySettings,
                authGuardRedirectUrl: '/forbidden',
                automaticLoginOn401: true,
                automaticInjectToken: true
            }
        });
    }

    return settings;
};
