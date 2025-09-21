import Article from "../classes/Article.js"
import ImageData from "../classes/ImageData.js"

export const useArticleData = () => {
    return {articleData}
}

const loremIpsum = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum lacus ut sodales sodales. Nullam tempus aliquam tortor, eu iaculis eros tristique in. Aenean vel mauris tristique, feugiat erat quis, porta augue. Curabitur nec ipsum viverra, fermentum arcu eu, convallis nibh. Nunc eleifend sem in magna pulvinar, vitae accumsan mauris elementum. Morbi nulla magna, pharetra ut hendrerit a, molestie vel nisl. Etiam non velit elit. Sed id mi sed nulla commodo dictum at eu tellus. Aliquam cursus vehicula pulvinar. "
const loremIpsum2 = " Donec nibh magna, sollicitudin vitae gravida non, consectetur id lectus. Nullam quis mi egestas, rhoncus nisi suscipit, imperdiet arcu. Nulla quis varius nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin vitae pharetra est, sit amet dapibus dolor. Fusce commodo consequat varius. Ut suscipit leo ut efficitur dapibus. Aliquam vel varius lacus. Fusce vel purus at metus tempor venenatis ac nec massa. Nullam maximus interdum dignissim. Morbi volutpat dolor eget eros lacinia lacinia. Sed pharetra commodo molestie. Pellentesque nec tincidunt lectus, et dapibus tortor. Nam condimentum, urna non porttitor rutrum, est odio ultrices nibh, vitae sodales velit eros ut mi. Morbi et diam tempus, porta nunc sit amet, efficitur nunc. Sed tempor maximus odio, sit amet egestas justo ullamcorper at. "
const loremIpsum3 = " Nam ornare, ante ac ultrices lacinia, nibh dolor pretium orci, vel auctor tellus purus eu arcu. Proin enim tellus, vestibulum id nisi vel, viverra tincidunt metus. Praesent mattis ligula non mollis eleifend. Mauris ut semper mauris. Fusce nunc neque, sodales sit amet porttitor sit amet, porttitor non nunc. Duis quis nisl nec elit aliquam elementum eget ut lorem. Pellentesque sit amet mi magna. Ut finibus risus elit, lacinia dictum nunc sagittis at. Phasellus sed feugiat ex. Proin tincidunt orci quis varius posuere. Cras sit amet nisi id justo iaculis convallis et eget nisl. Phasellus vitae ornare lectus. Vivamus dictum nunc sed lectus tempus malesuada. Etiam ullamcorper interdum imperdiet. Maecenas eget ornare eros, in euismod ipsum. "

// const articleData = {
//     "Article-1": new Article("Article 1","Subtitle 1","Jeff Davis",[new ImageData("/img/potato.svg",500,500),loremIpsum]),
//     "Article-2": new Article("Article 2","Subtitle 2","Jeff Davis",[loremIpsum2]),
//     "Article-3": new Article("Article 3","Subtitle 3","Jeff Davis",[new ImageData("/img/croissant.svg"),loremIpsum3]),
//     "Article-4": new Article("Article 4","Subtitle 4","Jeff Davis",[loremIpsum,loremIpsum2]),
//     "Article-5": new Article("Article 5","Subtitle 5","Jeff Davis",[loremIpsum3,loremIpsum2]),
//     "Article-6": new Article("Article 6","Subtitle 6","Jeff Davis",[loremIpsum2,loremIpsum3]),
//     "Article-7": new Article("Article 7","Subtitle 7","Jeff Davis",[new ImageData("/img/potato.svg"),loremIpsum2]),
//     "Article-8": new Article("Article 8","Subtitle 8","Jeff Davis",[new ImageData("/img/croissant.svg"),loremIpsum]),
//     "Article-9": new Article("Article 9","Subtitle 9","Jeff Davis",[new ImageData("/img/croissant.svg"),loremIpsum2,loremIpsum3]),
// }

const articleData = [
    {id: 139433943, title: "The Future of Steel in Modern Construction", subtitle: "How advanced steel solutions are shaping stronger, greener cities.", author: "Jeff Davis", publishDate: "2023-07-03", sections: [new ImageData("/img/potato.svg",500,500),loremIpsum]},
    {id: 546546567, title: "Why Steel Remains the Backbone of Infrastructure", subtitle: "Exploring durability, versatility, and cost-efficiency in large-scale projects.", author: "Alexandra Dallon", publishDate: "2023-08-15", sections: [loremIpsum2]},
    {id: 234354657, title: "Sustainable Steel: Reducing the Carbon Footprint", subtitle: "Innovations driving eco-friendly production in the steel industry.", author: "Maven Malone", publishDate: "2023-09-18", sections: [new ImageData("/img/croissant.svg"),loremIpsum3]},
    {id: 876879080, title: "Steel vs. Alternatives: The Strength Advantage", subtitle: "Why steel outperforms wood, concrete, and composites in critical applications.", author: "Dominic Johannson", publishDate: "2023-12-06", sections: [loremIpsum,loremIpsum2]},
    {id: 354756445, title: "The Role of Steel in Renewable Energy", subtitle: "Powering wind, solar, and hydro projects with high-performance materials.", author: "Eric Black", publishDate: "2024-01-01", sections: [loremIpsum3,loremIpsum2]},
    {id: 966767643, title: "From Mills to Markets: The Journey of Steel", subtitle: "A behind-the-scenes look at how steel is produced, processed, and delivered.", author: "Priscilla Von Leyen", publishDate: "2024-01-12", sections: [loremIpsum2,loremIpsum3]},
    {id: 465768942, title: "Smart Steel: Technology in Manufacturing", subtitle: "How AI, robotics, and automation are revolutionizing steel production.", author: "Aria Boltzmann", publishDate: "2024-02-26", sections: [new ImageData("/img/potato.svg"),loremIpsum2]},
    {id: 565757899, title: "Why Quality Steel Matters for Safety Standards", subtitle: "The hidden impact of material integrity on construction and engineering.", author: "Alexandra Dallon", publishDate: "2024-03-05", sections: [new ImageData("/img/croissant.svg"),loremIpsum]},
    {id: 778553345, title: "Steel Recycling: Closing the Loop for a Circular Economy", subtitle: "How recycled steel contributes to sustainability and cost savings.", author: "Jeff Davis", publishDate: "2024-03-09", sections: [new ImageData("/img/croissant.svg"),loremIpsum2,loremIpsum3]},
    {id: 669964533, title: "Steel Trends 2025: What to Expect", subtitle: "Key innovations, market forecasts, and industry opportunities.", author: "Eric Black", publishDate: "2024-04-07", sections: [loremIpsum,loremIpsum2,loremIpsum3]}
]