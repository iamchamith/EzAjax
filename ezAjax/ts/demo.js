/// <reference path="kendo.all.d.ts" />
$(function () {
    $("#grid").kendoGrid({
        columns: [
            { field: "Id" },
            { field: "Name" }
        ]
    });
    new Ajax.apiConnector().callservice("persons.json", null, Ajax.webMethod.Get).done(function (e) {
        console.log(e);
        $('#grid').data('kendoGrid').setDataSource(new kendo.data.DataSource({ data: e }));
    });
});
//# sourceMappingURL=demo.js.map