
CSS Secrets book learning
========================

####　　其实在2015年就开始在大漠的博客上关注到这本黑科技，而且博客也有陆陆续续的翻译，到了今年知道出了中文版就马上买回来支持一下，谢谢Lea Verou，w3cplus和css魔法哥。以下是我每一章节的一点小小的心得体会。####


**CH00 Introduction 介绍** 

　　这章虽然主要是介绍，但是有两个单词觉得挺好玩的,DRY(don't repeat yourself) and WET(We Enjoy Typing),从刚刚接触css到熟悉css一年的时间里都是觉得css有很多重复性的东西在里面，有点所谓的刀耕火种，尤其是兼容性和动画，直到看到这边书的内容才觉得css有好多隐藏技能，而且未来的css也必定朝DRY的方向发展。

　　这一章还有一个地方让我觉得非常好玩而且是佩服作者的地方就是这本书用css+html的形式制作，无论从书的设计布局到css代码（这点更加不用怀疑），都非常的赞。前天还上去Dabblet玩了一下，居然css尺寸的地方会出现标尺，真心佩服女神Lea Verou,所以这本书在我心目中的地位是高阶必备(之前的入面有css权威双鱼，进阶有绿色的那边css精粹)。

　　还有值得一提的是中文版虽然比原版和台版都要便宜，但是内容上和书的设计排版方面还是挺一致的。
　　
  
**CH02 Background & Border**

1. 半透明边框： background-clip
2. 多重边框： outline + border + box-shadow
3. 灵活的背景定位 ： background-position,background-origin,calc()
4. 边框内圆角： outline + box-shadow
5. 条纹背景：这一节开始让我有点黑科技的感觉，通过background可以有很多种背景组合效果，还有45度的时候的条纹分解。
6. 复杂的背景：这里找了几个典型例子，格子和波点
7. 伪随机背景：这一节真的是脑洞大开的节奏，原来css可以通过质数这个东西生成随机效果，对想到这点的作者我表示五体投地。
8. 连续的图像边框：通过background + gradient可以组合出多种连续边框，例如信封。

**CH03 Shapes**

1. 自适应椭圆：border-radius的值，特别是加上`/`的值代表什么，初始位置是右上角。
2. 平行四边形： :before + skew 
3. 菱形图片： transform(rotate + scale)和clip-path,clip-path功能非常强大，特意介绍一个[工具](http://bennettfeely.com/clippy/)
4. 切角效果：从这一节开始就有种用bg拼拼拼的节奏，我的理解bg就是一块块的积木，只要发挥你想象，就可以拼出无限种效果
5. 梯形：perspective + rotate + scale,使用3D透视制造梯形效果
6. 简单的饼图：这一节不太简单(我是学渣)，把每一步分解才基本理解，其中最magic的地方就是animation-play-state:paused 和 animation-delay为负数的组合效果。

**CH04 Visual Effects**

1. 投影: 扩张半径（第四个参数）为负数 + multiply shadows
2. 不规则投影：filter:drop-shadow 这里需要注意就是非透明的都会打上投影，例如文案
3. 染色效果：三种方法：filter(sepia + saturate + hue-rotate),img+mix-blend-mode,bg+background-blend-mode,而且都支持animation
4. 毛玻璃效果：这个方法好像有个约束的地方就是bg必须在body那一层,原理就是3层组合：bg-image(body,:before),bg-color(main),blur(:before)
5. 折角效果：这里就要用到高中的学到的几何知识，感觉对于45度的折角来说，代码还是比较dry，但是其他角度的话(通常是30deg,60deg),那就需要用到一些预编译让代码更加DRY，并且写之前要算好尺寸，看到这里，给我的感觉是每一章的最后一小节都是打boss的感觉，爽

