const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div><label for="authorName"> Author</label><input name="authorName" type="text" placeholder="author name"></div>

    <div><label for="authorEmail"> Email</label><input name="authorEmail" type="text" placeholder="author email"></div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div><textarea name="content"></textarea></div>

    <div><select name="pageStatus">
    <option value="open">Open</option>
    <option value="closed">Closed</option>
    </select></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
