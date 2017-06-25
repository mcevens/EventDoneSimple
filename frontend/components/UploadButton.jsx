var React = require("react");

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
// window.cloudinary_options = {
//   cloud_name: '<%= EVN['CLOUD_NAME'] %>'
//   upload_preset: '<%= ENV["UPLOAD_PRESET"]%>'
// };
