module.exports.eventhooks = function(cb) {
    sails.on('lifted', function yourEventHandler () {
        // console.log('lifted!!!!!!!!!')
    });
}