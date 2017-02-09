/**
 * @author Ramakrishnan Sathyavageeswaran
 */

(function () {
    app.controller('AboutController', function ($scope,$location) {

        $scope.title = "About";
        $scope.aboutme = "I am a Biologist by Profession and a Photographer by Whim and Passion. As a Scientist, I have always believed, that there are infinite hidden details in every single sight that your naked eye sees. Like the million microorganisms that`s not just in my petri dish, but also under my shoes or in the salad dressing I just tasted. Three years back when I captured my first digital Image, I was amazed by the million hidden details that a human expression can have, like the smug behind a smile and the smirk behind a slightly raised eyebrow. Since then, there was no looking back. I wake up wide eyed every morning and set out to capture the surprises that the world has in store for me.";
        $scope.workline = "I am immensely proud to present my work in this web gallery and behind every single click on these pictures, I am waiting with dreamy wide eyes open to hear out your comments, pats and suggestions.";
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
}());