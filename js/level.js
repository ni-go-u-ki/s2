/**
Author: Hirata

这个文件是用来画关卡选择界面的
用到了d3.js和monogatari.js的一些函数

如果要修改关卡数据，请修改flowChartData

**/

/**
 * flowChartData是一个数组，里面存放了关卡按钮的显示设定
 * 
 * 每个关卡的数据包括：
 * 1. x, y：关卡按钮的位置，是百分比单位
 * 2. id：关卡的id，需要与各个剧情脚本中unlock()函数里的字符串保持一致，否则关卡将无法正确解锁
 * 3. text：关卡的名字
 * 4. img：关卡按钮的图片，如果没有图片，就用""
 * 5. next：关卡的下一步，是一个数组，里面存放了下一步的关卡的id。如果没有下一步，就用null
 * 
 */
const flowChartData = [
    {x:50, y:10, id: "E60-BE", text: "混沌初开", img: "", next: ["level-E6-second"]},
    {x:50, y:35, id: "level-E6-second", text: "宫墙绿柳红砂 2", img: "./assets/gallery/E6_end_brick.png", next: ["level-E6-brick", "level-E6-hermit", "level-E6-fire"]},
    {x:23, y:60, id: "level-E6-brick", text: "重蹈覆辙", img: "./assets/gallery/E6_end_brick.png", next: null},
    {x:50, y:60, id: "level-E6-hermit", text: "拒不配合", img: "./assets/gallery/E6_end_hermit.png", next: null},
    {x:76, y:60, id: "level-E6-fire", text: "推翻太监", img: "./assets/gallery/E6_end_fire.png", next: null}
];
const buttonWidthRatio = 20;
const buttonHeightRatio = 15;


/**
 * 这是关卡选择界面的组件，继承自Monogatari.ScreenComponent
 * 
 * 本组件的作用是：
 * 在主界面“Start”按钮后面添加一个“Level”按钮
 * 点击“Level”按钮后，进入关卡选择界面
 * 读取flowChartData里面的数据，画出关卡选择界面
 * 每次解锁一个关卡，关卡选择界面都会更新
 * 
 * 关卡按钮的样式：
    1. 未解锁的关卡：button-type="locked"
    2. 已解锁的关卡：button-type="normal"

    关卡按钮的功能：
    1. 未解锁的关卡：无法点击
    2. 已解锁的关卡：点击后进入关卡

    关卡按钮的位置：
    1. 用flowChartData里面的x和y来确定位置
    2. 用buttonWidthRatio和buttonHeightRatio来确定大小

    关卡按钮的图片：
    1. 用flowChartData里面的img来确定图片
 * 
 */
class LevelScreen extends Monogatari.ScreenComponent {

    /**
     * The constructor is called when creating a new instance of the component
     * and it's the perfect place to setup everything you need.
     * 
     * 在这里，设置了“Level”的翻译
     */
    static setup () {
        this.engine.translation('English', {
            Level: 'Level'
        });
        this.engine.translation('简体中文', {
			Level: '开始游戏'
		});
        return Promise.resolve ();
    }

    /**
     * The bind() function is called when the component is loaded and ready
     * to be used. Here is where you should bind events and setup the component
     * if necessary.
     * 
     * 本函数的作用是：
     * 在主界面“Start”按钮后面添加一个“Level”按钮
     * 点击“Level”按钮后，进入关卡选择界面
     * 
     */
    static bind () {
        this.engine.component ('main-menu').addButtonAfter ('Start', {
            string: 'Level',
            data: {
                action: 'open-screen',
                open: 'level'
            }
        });
        // promise.resolve()是一个promise对象，表示异步操作的结束
        return Promise.resolve ();
    }

    constructor (...args) {
        super(...args);
    }

    /**
     * onStateUpdate()函数是用来更新关卡界面的
     * 当关卡解锁或者锁定时，更新关卡界面
     */
    onStateUpdate (property, oldValue, newValue) {
		super.onStateUpdate (property, oldValue, newValue);

		// Update the level screen when a level gets unlocked or locked
		this.forceRender ();

		return Promise.resolve ();
	}

    /**
     * render()函数将返回一个html代码，用来画关卡选择界面
     * 
     * 思路：
     *  1. 用d3.js画出关卡之间的连线
     *  2. 用button画出关卡按钮
     */
    render () {

        // 这是关卡界面html代码的开头
        let storyHtml = `
            <img-filter style='position:absolute; left:0%; 
                            top:0%; width:100%; height:100%;
                            '></img-filter>
            <button class="top left" data-action="back"><span class="fas fa-arrow-left"></span></button>
            <h2 data-string="Level">故事线</h2>
            <div data-content="levels">
        `;

        // 向storyHtml里面添加关卡之间的连线
        storyHtml += addArrows();

        // 向storyHtml里面添加关卡按钮
        // 关卡按钮的数据在flowChartData里面
        flowChartData.forEach((d, i) => {

            // 判断关卡是否解锁
            if (check_level(d.id)){
                // console.log(d.id);

                // 判断关卡数据是否有图片
                // 如果没有图片，img-container就用灰色的背景
                // 如果有图片，就用图片作为背景
                if (d.img == ""){
                    storyHtml += `
                        <img-container style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                        top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;
                        background-color: grey;' 
                        button-type="normal"></img-container>`;
                }
                else{
                    storyHtml += `
                        <img-container style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                        top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;
                        background-image: url("${d.img}"); background-position: center; 
                        background-repeat: no-repeat; 
                        background-size: cover;' 
                        button-type="normal"></img-container>`;
                }

                // 添加关卡按钮
                storyHtml += `
                    <button data-action=${d.id} style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                    top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;' 
                    button-type="normal">${d.text}</button>`;
            }else{

                // 如果关卡未解锁，就用灰色的背景
                // 并添加关卡按钮，但是无法点击，显示404
                storyHtml += `
                <img-container style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;
                ' 
                button-type="normal"></img-container>
                <button data-action=${d.id} style='position:absolute; left:${d.x - buttonWidthRatio/2}%; 
                top:${d.y - buttonHeightRatio/2}%; width:${buttonWidthRatio}%; height:${buttonHeightRatio}%;' 
                button-type="locked">404</button>`;
            }
        });

        // 关卡界面html代码的结尾
        storyHtml += "</div>";  // the end of <div data-content="levels"> 
        return storyHtml
    }
}

LevelScreen.tag = 'level-screen';

/**
 * 当游戏加载完毕后，给每个关卡按钮添加监听器
 * 当点击关卡按钮后，进入相应的关卡
 */
$_ready (() => {
    flowChartData.forEach((d, i) => {
        monogatari.registerListener (`${d.id}`, {
            callback: (event) => {
                enterLevel(d.id)
            }
        });
    })
})

function goToLevelScreen(){
    monogatari.global('playing', false);
    monogatari.showScreen ('level');
}

/**
 * 进入关卡的函数
 * @param {string} levelId 关卡id
 * 
 * 思路：
 * 1. 判断关卡是否解锁
 * 2. 如果解锁，就进入关卡
 */
function enterLevel(levelId){
    if(localStorage.getItem(levelId) =='1')
    {
        monogatari.global ('playing', true);
        monogatari.showScreen ('game');
        switch(levelId){
            case 'E60-BE':
                monogatari.run ("jump E60-BE");
                // 设置对话框的样式
                setTextBoxCSS(textBoxDefault);
                break;
            case 'level-E6-second':
                monogatari.run ("jump E61-decision");
                setTextBoxCSS(textBoxE6);
                break;
            case 'level-E6-fire':
                monogatari.run ("jump E61C-protest");
                setTextBoxCSS(textBoxE6);
                break;
            case 'level-E6-hermit':
                monogatari.run ("jump E61B-noobey");
                setTextBoxCSS(textBoxE6);
                break;
            case 'level-E6-brick':
                monogatari.run ("jump E61A-nochange");
                setTextBoxCSS(textBoxE6);
                break;
            default:
                break;
        }
    }
}

/**
 * 用d3.js画出关卡之间的连线
 * 返回一个svg的html代码
 * 
 * 关卡之间的连线数据在flowChartData里面
 */
function addArrows(){
    // Set up the SVG container
    const svg = d3.create("svg")
        .attr("width", "100%")
        .attr("height", window.innerHeight);

    flowChartData.forEach((d, i) => {
        // 如果关卡有下一个关卡，就画出连线
        if (d.next) {
            d.next.forEach((nextTarget, k) => {

                const nextNode = flowChartData.find(node => node.id === nextTarget);
                const nextX = nextNode.x;
                const nextY = nextNode.y;

                const arrow = svg.append("line")
                    .attr("x1", `${d.x}%`)
                    .attr("y1", `${d.y+ buttonHeightRatio/2}%`)
                    .attr("x2", `${nextX}%`)
                    .attr("y2", `${nextY- buttonHeightRatio/2}%`)
                    .attr("stroke", "grey")
                    .attr("stroke-width", 2)
                    //.attr("marker-end", "url(#arrowhead)");
            })
        }
    });

    // Define arrowhead marker
    svg.append("defs")
    .append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 10)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr("fill", "grey");

    return svg.node().outerHTML;
}



