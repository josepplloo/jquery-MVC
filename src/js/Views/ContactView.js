function ContactView() {
  this.renderTable = function($el, data){
    let table = `<table class="table js-table-contacts">
      <thead>
        <th>Image</th>
        <th>Name</th>
        <th>Remove</th>
      </thead>
      <tbody></tbody>
    </table>`;
    $el.append(table);
  }

  this.renderTableContent = function($el, data){
    $table = $el.find('.js-table-contacts tbody');
    $table.empty();
    data.forEach(function(e){
      let row = `<tr>
        <td>
        <img class="js-contact-image" 
          src="${e.avatar}"></img>
        </td>
        <td>${e.name}</td>
        <td><a href="#" class="js-remove-contact" data-id="${e.id}">remove</a></td>
      </tr>`
      $table.append(row);
    });
  }

  this.renderForm = function($el) {
      
    let form = `<form class="form-inline js-add-contact">
      <div class="form-group mx-sm-3 mb-2">
        <input type="text" class="form-control js-contact-name" placeholder="Name" name="name" required/>
      </div>
      <button id="submit" class="btn btn-primary" type="submit" disabled>Add</button>
    </form>`;

    $el.append(form);

  }

  const isDisabled = function() {
    $("#submit").attr("disabled", false);
  }

  Observer.subscribe(isDisabled);

}