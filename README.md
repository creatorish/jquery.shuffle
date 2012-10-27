jQueryShuffleText
======================
JSでシャッフル演出ができるライブラリShuttleTextをjQueryプラグイン化するプラグイン

デモ
------
<a href="http://dev.creatorish.com/demo/jquery.shuffle/" target="_blank">http://dev.creatorish.com/demo/jquery.shuffle/</a>

使い方
------

<a href="http://clockmaker.jp/blog/2012/02/html5_shuffletext/" target="_blank">ShuffleText</a>をダウンロードします。

次に必要なスクリプトを読み込みます。

     <script type="text/javascript" src="jquery.js"></script>
     <script type="text/javascript" src="ShuffleText.js"></script>
     <script type="text/javascript" src="jquery.suffletext.js"></script>

シャッフルさせたい要素に以下のように記述します。

    var shuffle = $(".test").shuffleText();
    shuffle.start();

ID指定でもクラス指定でもＯＫです。  
クラスを指定すると、同じクラスを指定した要素すべてをシャッフルします。

クラスで指定をするけども、シャッフルは個別にさせたいときは以下のように引数に要素を渡します。

    var shuffle = $(".test").shuffleText();
    shuffle.start($("#test"));

上記の場合、id=testとclass=testが要素に記述されている必要があります。


オプション
------

シャッフルテキストのシャッフル時間や文字の指定をすることができます。

    $("hoge").ShuffleText({
        //ランダムテキストに用いる文字列
        sourceRandomCharacter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
        //空白に用いる文字列
        emptyCharacter: "-",
        //フレームレート
        fps: 60,
        //エフェクトの実行時間
        duration: 600
    });

+    sourceRandomCharacter: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" : ランダムテキストに用いる文字列
+    target: "-" : 空白に用いる文字列
+    fps: 60 : フレームレート
+    duration: 600 : エフェクトの実行時間

ライセンス
--------
[MIT]: http://www.opensource.org/licenses/mit-license.php
Copyright &copy; 2012 creatorish.com
Distributed under the [MIT License][mit].

作者
--------
creatorish yuu  
Weblog: <http://creatorish.com>  
Facebook: <http://facebook.com/creatorish>  
Twitter: <http://twitter.jp/creatorish>