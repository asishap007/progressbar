/**
 * @ngdoc service
 * @name progressbarApp.progressBarService
 * @description
 * # progressBarService
 * Service in the progressbarApp.
 */
angular.module('progressbarApp')
  .service('progressBarService', function ($http, $q, ENDPOINT) {
    // AngularJS will instantiate a singleton by calling "new" on this function

     this.progressBarData = this.progressBars ='';

     function getProgressBarData() {
       var def = $q.defer();
       $http({method: 'GET', url: ENDPOINT}).then(function(response) {
           def.resolve(response.data);
       },function() {
           def.reject("Failed to get data");
       });
       return def.promise;
     }

     function setProgressBarData(progressBarData) {
        this.progressBarData = progressBarData;
     }

     function createProgressBars() {
       var progressBarValues = this.progressBarData.bars || [];
       var progressBars = [];
       progressBarValues.map(function (item, idx) {
         var progressbar = {};
         var index = idx + 1;
         progressbar.value = item;
         progressbar.id = 'progress'+index;
         progressbar.isLimitReached = false;
         progressBars.push(progressbar);
       });
       this.setProgressBars(progressBars);
       return progressBars;
     }

     function getProgressBars() {
        return this.progressBars;
     }

     function setProgressBars(progressBars) {
       this.progressBars = progressBars;
     }

     function getProgressBarLimit() {
       return this.progressBarData.limit || 100;
     }

     function getProgressBarButtons() {
        return this.progressBarData.buttons || [];
     }

     function updateProgressBar(btnvalue, progressBar) {
       var progressBars = this.getProgressBars();
       var progressBarLimit = this.getProgressBarLimit();
       progressBars.map(function (item) {
         if(item.id === progressBar.id){
           item.value = btnvalue + item.value ;
           if(item.value < 0 ) {item.value = 0;}
           if(item.value >= progressBarLimit){
             item.isLimitReached = true;
           }else{
             item.isLimitReached = false;
           }
         }
       });
       this.setProgressBars(progressBars);
     }



     return {
       getProgressBarData: getProgressBarData,
       setProgressBarData: setProgressBarData,
       createProgressBars: createProgressBars,
       getProgressBars : getProgressBars,
       getProgressBarLimit: getProgressBarLimit,
       getProgressBarButtons : getProgressBarButtons,
       updateProgressBar: updateProgressBar,
       setProgressBars: setProgressBars

     };

  });
