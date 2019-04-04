
new Vue({
    el: '#Edit',
    data: {
        show_EditTool: !true,
        message: 'Write a message.'
    },
    methods: {
        hideEditTool: function(){
            this.show_EditTool = false;
        },
        EditTool: function(){
            this.show_EditTool = !this.show_EditTool;
        }
    }
})