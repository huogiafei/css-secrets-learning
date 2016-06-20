
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
4. 边框内圆角： outline + box-shadow（outline不跟圆角，box-shadow跟圆角）
5. 条纹背景：要点三个：1.通过渐变断点设置 2.45度的时候的条纹分解 3.repeating-linear-gradient
6. 复杂的背景：这里找了几个典型例子，格子和波点,主要是把图案分解成可以repeat的unit，通过bg-position和bg-size去生成图案
7. 伪随机背景：脑洞大开的一节，css可以通过质数生成随机效果，而这里通过多种颜色片的相互重叠(通过bg-size最小公倍数最大化)。
8. 连续的图像边框：通过background + gradient可以组合出多种连续边框，例如信封。

**CH03 Shapes**

1. 自适应椭圆：border-radius的值，特别是加上`/`分割水平垂直半径，初始位置是右上角。
2. 平行四边形： :before + skew 
3. 菱形图片： transform(rotate + scale)和clip-path,个人偏向clip-path，而transform给我感觉是牵一发动全身，clip-path方面介绍一个[工具](http://bennettfeely.com/clippy/)
4. 切角效果：1.背景渐变拼接 2.svg + border-image 3.clip-path
5. 梯形：perspective + rotate + scale,使用3D透视制造梯形效果
6. 简单的饼图：作为这章的boss,可以说不简单，把每一步分解才基本理解，而且css和svg实现原理差别挺大，css方案最神奇的地方就是animation-play-state:paused 和 animation-delay为负数的组合效果，而我会偏向svg方案

**CH04 Visual Effects**

1. 投影: 扩张半径（第四个参数）为负数 + multiply shadows
2. 不规则投影：filter:drop-shadow 这里需要注意就是非透明的都会打上投影，例如文案
3. 染色效果：三种方法：filter(sepia + saturate + hue-rotate),img+mix-blend-mode,bg+background-blend-mode,而且都支持animation
4. 毛玻璃效果：3层组合： 第一层Content,第二层模糊层,第三层背景层,装逼一点的解释就是：content(content/z:0)，blur(wrap:before/z:1),bg-image(wrap/z:-2)
5. 折角效果：对于45度的折角来说，代码还是比较dry，但是其他角度的话(通常是30deg,60deg),那就需要用到一些预编译让代码更加DRY，并且写之前要算好尺寸

**CH05 Typography**

1. 连字符断行: hyphens,不过支持方面只有edge，Firefox和ios支持
2. 插入换行: 在dt,dl,dd这种情况下使用content:'\A'和white-space:pre(不合并空白)
3. 斑马纹文本行： 在table下nth-child的确可以实现zebra效果，而一段文本作为一个整体可以用bg:linear-gradient 和 bg-position(一般文本都有padding)实现
4. 调整tab的宽度：tab-size,在html输出源码的时候使用
5. 连字：中文来说没多大用处，英文的话也是要配合字体使用
6. 华丽的&符号：local + unicode-range 可以让指定的字符使用特别的字体
7. 自定义下划线：实现方式：underline,border,box-shadow,bg:linear-gradient,使用text-shadow还可以避开例如g字符的降部，波浪下划线还要自己画图算一下(高中几何的感觉)
8. 现实中的文字效果：text-shadow + svg
9. 环形文字：svg + textPath

**CH06 User Experience**

1. 合适的鼠标光标（cursor）: help,not-allowed感觉可以经常用到，还有none这个比较好玩，除了可以整蛊别人之外，目前还没想到实际用途
2. 扩大可点击区域：移动开发优化，两种方案：1.border 2::before。第二种方案更好，不影响布局
3. 自定义复选框：通过:check完全不再依赖js，而且最爽的是可以完全自定义样式，里面有个要注意的是需要content:'\a0'（不换行空格）做占位
4. 弱化背景（阴影）：个人比较喜欢box-shadow方案，如果使用：before的话，当父层级出现背景的时候，遮罩层会被挡住
5. 弱化背景（模糊）：使用blur和其他filter配合，不过边缘光晕需要注意一下，需要在父层级那里添加box-shadow
6. 滚动提示：两层背景 + background-attachment(scroll，local)
7. 交互式的图片对比控件：两层image重叠，使用resize可以调整上层img的宽度，不过为了UI统一和易用性，都要自定义一下底部三角箭头（Chrome必须重写这块才出现箭头），不过感觉还是有点遗憾的就是控制区只有小箭头。

**CH07 Structure & Layout**

1.自适应内部元素：width:min-content
2.精确控制表格列宽：table-layout:fixed可以获得更灵活的table布局
3.根据兄弟元素数量来设置样式：非常黑魔法的一节，通过first-child,nth-child和nth-last-child互相组合这个idea我非常佩服
4.满幅背景，定宽内容：可以直接联想到footer(1200px宽度，满屏的灰色背景),一般是使用两层去控制，不过以后可以padding: 1em calc(100% - content-width)
5.垂直居中：这个功能已经是CSS的笑柄了，自己写起来也非常不方便，反正我觉得充满hack的味道，目前个人觉得最好的解决方案是使用flexbox布局，这一点也是够讽刺的，难道其他布局不需要垂直居中
6.置底的页脚：当页面内容太少的时候，footer就会‘浮’起来，解决有两种方法：1.calc(部分元素需要固定高度) 2.flexbox(使用flex:1让内容区自动拉伸)

**CH08 Transitions & Animations**

1.弹性效果：其实这一节除了了解cubic-bezier之外，还要通过不断调试曲线和时间点让动画效果看的逼真一点，或许还需要恶补一番动画的基本知识
2.逐帧动画：其实有些动画需要硬切，step()这个被遗忘的参数恰好就适合逐帧动画
3.闪烁效果：通过改变透明度实现闪烁效果，而且加上step可以实现硬切闪烁，例如光标
4.打字动画：step + ch(长度单位),不过要注意的是:1.用js算出字符长度更好维护 2.字体差异需要letter-spacing去微调一下间隔位置
5.状态平滑的动画：animation不像transition,它在没有‘active’状态下硬切回开始状态，这节的解决方案（animation-play-state）我觉得不算太理想，不过还是可以适合一些动画效果,让动画暂停
6.沿环形路径平移动画：这一节我的解决方案可能跟作者的有点不一样，之前是类似用到AE的一个空白对象（参考系）概念解决旋转问题，而这里除了空白对象旋转，还需要子元素反向旋转抵消

--------------------------------------

**经典语录 Quotations**

- DRY: "Don’t Repeat Yourself."
- WET: "We Enjoy Typing"
- This is a book that eats its own dog food (佩服作者这是一本用html+css+js写出来的电子书)
- Credit where it’s due (作者借鉴别人好的idea，都会致敬一下原创者，这是我真心佩服的，就像这句话一样)
- It didn’t take long for everyone involved to realize that vendor prefixes were an epic failure.(嘲讽一下：CSS规范是由浏览器厂商制定的)
- media query thresholds should not be dictated by specific devices


 