require(["jquery"], function (jq) {
    console.log(typeof jq);
    require(["mod"], function () {
        console.log("loaded");
    });
});