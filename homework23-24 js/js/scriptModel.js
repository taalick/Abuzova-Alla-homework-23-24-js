define(
	'scriptModel',
	function(){
		return{
			Model: function (){
				var self = this;

				self.data = ['learn javascript', 'learn html', 'learn scss'];

				self.addItem = function(item){
					if(item.length === 0){
						return;
					}
					self.data.push(item);
					return self.data;
				};
				self.removeItem = function(item){
					var index = self.data.indexOf(item);
					if(index === -1){
						return;
					}

					self.data.splice(index, 1);
					return self.data;
				};

				self.editItem = function (item, newItem) {
					var index = self.data.indexOf(item);
					if (index === -1) return;
					self.data[index] = newItem;
					return self.data;
				};
			}			
		};
	}
);