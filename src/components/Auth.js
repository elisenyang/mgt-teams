import React from 'react';
import * as microsoftTeams from '@microsoft/teams-js/dist/MicrosoftTeams';
import { TeamsProvider } from '@microsoft/mgt';

function Auth() {
    TeamsProvider.microsoftTeamsLib = microsoftTeams;
    TeamsProvider.handleAuth()
    return (
        <div>Logging in</div>
    )
}

export default Auth;