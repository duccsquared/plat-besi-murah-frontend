import Article from "../classes/Article.js"
import ImageData from "../classes/ImageData.js"

export const useArticleData = () => {
    return {articleData}
}

const loremIpsum = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum lacus ut sodales sodales. Nullam tempus aliquam tortor, eu iaculis eros tristique in. Aenean vel mauris tristique, feugiat erat quis, porta augue. Curabitur nec ipsum viverra, fermentum arcu eu, convallis nibh. Nunc eleifend sem in magna pulvinar, vitae accumsan mauris elementum. Morbi nulla magna, pharetra ut hendrerit a, molestie vel nisl. Etiam non velit elit. Sed id mi sed nulla commodo dictum at eu tellus. Aliquam cursus vehicula pulvinar. "
const loremIpsum2 = " Donec nibh magna, sollicitudin vitae gravida non, consectetur id lectus. Nullam quis mi egestas, rhoncus nisi suscipit, imperdiet arcu. Nulla quis varius nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae pharetra est, sit amet dapibus dolor. Fusce commodo consequat varius. Ut suscipit leo ut efficitur dapibus. Aliquam vel varius lacus. Fusce vel purus at metus tempor venenatis ac nec massa. Nullam maximus interdum dignissim. Morbi volutpat dolor eget eros lacinia lacinia. Sed pharetra commodo molestie. Pellentesque nec tincidunt lectus, et dapibus tortor. Nam condimentum, urna non porttitor rutrum, est odio ultrices nibh, vitae sodales velit eros ut mi. Morbi et diam tempus, porta nunc sit amet, efficitur nunc. Sed tempor maximus odio, sit amet egestas justo ullamcorper at. "
const loremIpsum3 = " Nam ornare, ante ac ultrices lacinia, nibh dolor pretium orci, vel auctor tellus purus eu arcu. Proin enim tellus, vestibulum id nisi vel, viverra tincidunt metus. Praesent mattis ligula non mollis eleifend. Mauris ut semper mauris. Fusce nunc neque, sodales sit amet porttitor sit amet, porttitor non nunc. Duis quis nisl nec elit aliquam elementum eget ut lorem. Pellentesque sit amet mi magna. Ut finibus risus elit, lacinia dictum nunc sagittis at. Phasellus sed feugiat ex. Proin tincidunt orci quis varius posuere. Cras sit amet nisi id justo iaculis convallis et eget nisl. Phasellus vitae ornare lectus. Vivamus dictum nunc sed lectus tempus malesuada. Etiam ullamcorper interdum imperdiet. Maecenas eget ornare eros, in euismod ipsum. "


const articleData = {
    "Article-1": new Article("Article 1","Subtitle 1","Jeff Davis",[new ImageData("/img/potato.svg",500,500),loremIpsum]),
    "Article-2": new Article("Article 2","Subtitle 2","Jeff Davis",[loremIpsum2]),
    "Article-3": new Article("Article 3","Subtitle 3","Jeff Davis",[new ImageData("/img/croissant.svg"),loremIpsum3]),
    "Article-4": new Article("Article 4","Subtitle 4","Jeff Davis",[loremIpsum,loremIpsum2]),
    "Article-5": new Article("Article 5","Subtitle 5","Jeff Davis",[loremIpsum3,loremIpsum2]),
    "Article-6": new Article("Article 6","Subtitle 6","Jeff Davis",[loremIpsum2,loremIpsum3]),
    "Article-7": new Article("Article 7","Subtitle 7","Jeff Davis",[new ImageData("/img/potato.svg"),loremIpsum2]),
    "Article-8": new Article("Article 8","Subtitle 8","Jeff Davis",[new ImageData("/img/croissant.svg"),loremIpsum]),
    "Article-9": new Article("Article 9","Subtitle 9","Jeff Davis",[new ImageData("/img/croissant.svg"),loremIpsum2,loremIpsum3]),
}