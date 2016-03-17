import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    // Requires jQuery!
    jQuery.ajax({
        url: "https://allovue.atlassian.net/s/5c434c1a6a53eedc82346cbf6440c1e0-T/en_US716lwq/72000/be09033ea7858348cd8d5cdeb793189a/2.0.13/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=ce1b95f0",
        type: "get",
        cache: true,
        dataType: "script"
    });

    window.ATL_JQ_PAGE_PROPS =  {
      "triggerFunction": function(showCollectorDialog) {
        //Requires that jQuery is available! 
        jQuery("#design-request").click(function(e) {
          e.preventDefault();
          showCollectorDialog();
        });
      }
    };
  }
});
