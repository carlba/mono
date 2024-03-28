python_venv_bin := "venv/bin"
set dotenv-load := true

_header name:
  @echo '{{ name }}'

new name:
  @echo "Cloning template repo to {{ name }}"
  @git clone https://github.com/carlba/typescript-template.git {{ name }}
  @rm -rf {{ name }}/.git
  @cd {{ name }} && npm install 
