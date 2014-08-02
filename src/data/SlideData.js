define(function(require, exports, module) {
    var SlideData = {
        userId: '102691619364204299035',
        albumId: '6016390410936913825',
        picasaUrl: 'https://picasaweb.google.com/data/feed/api/user/',
        queryParams: '?alt=json&hl=en_US&access=visible&fields=entry(id,media:group(media:content,media:description,media:keywords,media:title))',
        defaultImage: 'https://lh6.googleusercontent.com/-K_wzstHt-Tg/U36DQhVFrWI/AAAAAAAAACM/mSDIcamC0vo/s72/4.jpg'
        //https://plus.google.com/photos/102691619364204299035/albums/6016390410936913825
    };

    SlideData.getUrl = function() {
        return SlideData.picasaUrl + SlideData.userId + '/albumid/' + SlideData.albumId + SlideData.queryParams;
    };

    SlideData.parse = function(data) {
        var urls = [];
        data = JSON.parse(data);
        var entries = data.feed.entry;
        for (var i = 0; i < entries.length; i++) {
            var media = entries[i].media$group;
            urls.push(media.media$content[0].url);
        }
        return urls;
    };

    module.exports = SlideData;
});
