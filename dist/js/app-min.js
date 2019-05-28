var Bootstrap=function(){function t(t){t.forEach(t=>{!function(t){$("[data-controller='"+t+"']").each(function(){let a=new window[t+"View"](this),e=new window[t+"Model"];new window[t+"Controller"](this,a,e).init()})}(t)})}return{start:function(){t(["Contact","Gallery"])}}}();function ContactController(t,a,e){this.$el=$(t),this.view=a,this.model=e,this.init=function(){this.view.renderTable(this.$el),this.view.renderForm(this.$el),this.bindEvents(),this.showContacts()},this.bindEvents=function(){this.$el.on("submit",".js-add-contact",this.createContact.bind(this)),this.$el.on("click",".js-remove-contact",this.deleteContact.bind(this))},this.createContact=function(t){t.preventDefault();let a=this.$el.find(".js-contact-name").val();this.model.create(a,Observer.getData().avatar),this.showContacts(),Observer.publish()},this.deleteContact=function(t){t.preventDefault();let a=$(t.target).data("id");this.model.remove(a),this.showContacts()},this.showContacts=function(){let t=this.model.getAll();this.view.renderTableContent(this.$el,t)}}function GalleryController(t,a,e){this.$el=$(t),this.view=a,this.model=e,this.init=function(){this.view.render(e.getAll()),this.bindEvents()},this.bindEvents=function(){this.$el.on("click",".js-gallery-image",this.imageClicked.bind(this))},this.imageClicked=function(t){n(),t.target.classList.add("js-gallery-image--selected"),Observer.setData("avatar",$(t.target).attr("src")),Observer.publish()};const n=function(t){$(".js-gallery-image").removeClass("js-gallery-image--selected")}}function ContactModel(){this.data=[{id:1,name:"Damir",avatar:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"},{id:2,name:"Mauricio",avatar:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"},{id:3,name:"Juan",avatar:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}],this.autoIncrement=this.data.length+1,this.getAll=function(){return this.data},this.create=function(t,a){this.data.push({id:this.autoIncrement++,name:t,avatar:a})},this.remove=function(t){this.data=this.data.filter(a=>a.id!==t)}}function GalleryModel(t){let a=[{id:1,avatar:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"},{id:2,avatar:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"},{id:3,avatar:"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}];this.getAll=function(){return a},this.get=function(t){return a.find(a=>a.id===t).avatar}}$(function(){Bootstrap.start()});const Observer=function(){let t=[],a={};return{subscribe:function(a){t.push(a)},publish:function(){t.forEach(t=>{t(a)})},getData:function(){return a},setData:function(t,e){return a[t]=e}}}();function ContactView(){this.renderTable=function(t,a){t.append('<table class="table js-table-contacts">\n      <thead>\n        <th>Image</th>\n        <th>Name</th>\n        <th>Remove</th>\n      </thead>\n      <tbody></tbody>\n    </table>')},this.renderTableContent=function(t,a){$table=t.find(".js-table-contacts tbody"),$table.empty(),a.forEach(function(t){let a=`<tr>\n        <td>\n        <img class="js-contact-image" \n          src="${t.avatar}"></img>\n        </td>\n        <td>${t.name}</td>\n        <td><a href="#" class="js-remove-contact" data-id="${t.id}">remove</a></td>\n      </tr>`;$table.append(a)})},this.renderForm=function(t){t.append('<form class="form-inline js-add-contact">\n      <div class="form-group mx-sm-3 mb-2">\n        <input type="text" class="form-control js-contact-name" placeholder="Name" name="name" required/>\n      </div>\n      <button id="submit" class="btn btn-primary" type="submit" disabled>Add</button>\n    </form>')};Observer.subscribe(function(){$("#submit").attr("disabled",!1)})}function GalleryView(t){this.$el=$(t),this.render=function(t){this.$el.append(t.map(t=>`<img class="js-gallery-image" \n          data-id="${t.id}" \n          src="${t.avatar}"></img>`))}}