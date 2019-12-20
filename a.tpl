    <h1>模板2 部门名称: {{title}}</h1>
    <table>
      <tr>
        <th>新闻标题</th>
        <th>次数</th>
      </tr>

      {{each list}}
      <tr>
        <td>{{$value.title}}</td>
        <td>{{$value.count}}</td>
      </tr>
      {{/each}}
    </table>
