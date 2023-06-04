// CodeMirror-Instanz für HTML-Tabellenbeispiele
var codeEditorTable = CodeMirror(document.getElementById("code-editor-table"), {
    mode: "htmlmixed",
    theme: "default",
    lineNumbers: true,
    readOnly: true
});

// Standard-HTML-Tabelle
var tableCode =
    '<table>\n' +
    '  <tr>\n' +
    '    <th>Spalte 1</th>\n' +
    '    <th>Spalte 2</th>\n' +
    '  </tr>\n' +
    '  <tr>\n' +
    '    <td>Zelle 1</td>\n' +
    '    <td>Zelle 2</td>\n' +
    '  </tr>\n' +
    '</table>';

codeEditorTable.setValue(tableCode);

// Interaktivität: Eine Zeile zur Tabelle hinzufügen
document.getElementById("tableButton").addEventListener("click", function() {
    var newTableRow =
        '  <tr>\n' +
        '    <td>Neue Zelle 1</td>\n' +
        '    <td>Neue Zelle 2</td>\n' +
        '  </tr>\n' +
        '</table>';

    // Bestehenden Code mit neuer Zeile aktualisieren
    tableCode = tableCode.replace('</table>', newTableRow);
    codeEditorTable.setValue(tableCode);
});
