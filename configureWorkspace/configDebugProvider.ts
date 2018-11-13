/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See LICENSE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

import * as vscode from 'vscode';
export class DockerDebugConfigProvider implements vscode.DebugConfigurationProvider {

    public provideDebugConfigurations(folder: vscode.WorkspaceFolder | undefined, token?: vscode.CancellationToken): vscode.ProviderResult<vscode.DebugConfiguration[]> {
        return vscode.window.showInputBox({ value: '/usr/src/app', prompt: 'Please enter your Docker remote root'}).then(remoteRoot => {
            return [{
                name: 'Docker: Attach to Node',
                type: 'node',
                request: 'attach',
                remoteRoot
            }];
        });
    }

}
