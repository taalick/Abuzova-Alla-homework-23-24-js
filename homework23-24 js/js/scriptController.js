define(
	'scriptController',
	function(){
		return{
			Controller: function (model, view){
				var self = this;

				view.elements.addBtn.on('click', addItem);				
				view.elements.listContainer.on('click', '.item-delete', removeItem);
				view.elements.listContainer.on('click', '.item-edit', editItem);

				function addItem(){
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				}

				function removeItem(){
					var item = $(this).attr('data-value');
					model.removeItem(item);
					view.renderList(model.data);
				}

				function editItem() {
					var item = $(this).attr('data-value');
					var input = $(this).parent().find('input');

					input.removeAttr('disabled').focus();
					input.on('focusout', function() {
						var newValue = $(this).val();
						correctItem(item, newValue, $(this));
						input.attr('disabled','disabled');
					});
				};

				function correctItem(value, newValue, item) {
					var index = $(this).parent().index();
					item.attr('disabled','disabled');
					model.editItem(value, newValue);
					view.renderList(model.data);
				};
			}			
		};
	}
);