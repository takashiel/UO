//=============================================================================
// y_test.js
//=============================================================================

/*:
 * @plugindesc プラグイン導入テスト用プラグインです。画面に敵キャラ画像が表示されるだけです
 * @author yutanpoZ
 *
 * @param Enemie Name
 * @desc 表示させたい敵キャラのファイル名を入力します
 * @default Slime
 *
 * @param x.pos
 * @desc 表示させたいx座標を指定
 * @default 300
 *
 * @param y.pos
 * @desc 表示させたいy座標を指定
 * @default 10
 *
 * @help
 *  ヘルプが表示されます
 *
 *
 */
(function() {
    var parameters = PluginManager.parameters('y_test');
    var takiname = String(parameters['Enemie Name'] || 'Slime');
    var x_pos = Number(parameters['x.pos'] || 300);
    var y_pos = (parameters['y.pos'] || 10);
    var createUpper = Spriteset_Map.prototype.createUpperLayer;
     Spriteset_Map.prototype.createUpperLayer = function() {
         createUpper.call(this);

         var sprite = new Sprite();
         sprite.bitmap = ImageManager.loadEnemy(takiname);
         sprite.x = x_pos;
         sprite.y = y_pos;
         sprite.visible = true;
         this.addChild(sprite);
       };

 })();
