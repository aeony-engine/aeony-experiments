import { Aeony } from '@aeony/aeony';

import { GameScene } from './scenes/gameScene';

if (os.getenv('LOCAL_LUA_DEBUGGER_VSCODE') === '1') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
  require('lldebugger').start();
}

new Aeony({ designWidth: 400, designHeight: 300, startScene: GameScene, debug: true });
