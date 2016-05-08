/**
 * Created by Louis on 8/5/2016.
 */

class LouisAria2 {

    public init() {
        $.material.init();

        window.alert = function(msg) {
            sweetAlert(msg);
        };

        window.confirm2 = function (msg, callback) {
            swal({
                title: "Message",
                text: msg,
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            }, callback);
        }
    }

}