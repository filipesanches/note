const data = new Date();
const exbData = document.querySelector('#data');
const hotkey = document.querySelector('#hotkey');
const btn = document.querySelectorAll('button');
const tagsComent = document.querySelectorAll('[data-comentario="comentario"]');
const btnfechar = document.querySelector('#gerar > a')
const email = [
  '-',
  'AS - Reschedule 1',
  'AS - Acceptable Reschedule',
  'NI - Awaiting Inputs',
  'NI - In Consult',
  'NI - Awaiting Validation',
  'NI - Attempted Contact',
  'NI - tag',
  'IN - Infeasible',
  'IN - Not Reachable',
  'IN - Not Interested',
  'IN - Not Ready',
  'IN - Out of Scope - Rerouted to Internal Team',
  'IN - Out of Scope - Unable to Transfer',
  'IN - Out of Scope - Email to Seller',
  'IN - tag',
  'SO - Verified',
  'SO - Verified No Recent Conversion',
  'SO - Unverified',
  'SO - Verification Not Needed'
];
const hotkeystr = [
  '-',
  'ts as resched1',
  'ts as reschedok',
  'ts ni ai',
  'ts ni ic',
  'ts ni av',
  'ts ni ac',
  'ts ni oth',
  'ts in inf',
  'ts in nrch',
  'ts in ni',
  'ts in nrdy',
  'ts in oost',
  'ts in oosu',
  'ts in oos seller',
  'ts in oth',
  'ts so verif',
  'ts so verif nrc',
  'ts so unv',
  'ts so vnn'
];
const badList = [
  "Informações de contato erradas |	BAD LEAD - Wrong contact information",
  "Informações de contato ausentes |	BAD LEAD - Missing contact information",
  "Task incorreta | BAD LEAD - Wrong task",
  "Cliente não estava ciente da consultoria | BAD LEAD - Client wasn't aware of the appointment",
  "URL incorreta | BAD LEAD - Wrong URL",
  "URL ausente | BAD LEAD - URL not provided",
  "Nome do cliente errado | BAD LEAD - Wrong client's name",
  "Cliente não está interessado na consultoria | BAD LEAD - Client is not interested",
  "Cliente não possui acessos administrativos | BAD LEAD - No admin access",
  "Task sem detalhes necessários para a implementação | BAD LEAD - Task without details/instructions",
  "Conta suspensa por política | BAD LEAD - Account suspended",
  "CID Errado | BAD LEAD - Wrong CID",
  "Pedido fora de escopo | BAD LEAD - Solicitation Out of Scope",
  "Idioma Errado | BAD LEAD - Wrong Language",
  "AM não explicou a importância da nossa consultoria | BAD LEAD - Account manager didn't explain the importance of the service",
  "Quando o email sobre a consultoria vai para a caixa de Spam | SPAM - <Email Client></Email>"
]
const badvalue = [
  "BAD LEAD - Wrong contact information",
  "BAD LEAD - Missing contact information",
  "BAD LEAD - Wrong task",
  "BAD LEAD - Client wasn't aware of the appointment",
  "BAD LEAD - Wrong URL",
  "BAD LEAD - URL not provided",
  "BAD LEAD - Wrong client's name",
  "BAD LEAD - Client is not interested",
  "BAD LEAD - No admin access",
  "BAD LEAD - Task without details/instructions",
  "BAD LEAD - Account suspended",
  "BAD LEAD - Wrong CID",
  "BAD LEAD - Solicitation Out of Scope",
  "BAD LEAD - Wrong Language",
  "BAD LEAD - Account manager didn't explain the importance of the service",
  "SPAM - &#60;Email Client&#62;&#60;/Email&#62;"
]
const tagsImplement = [
  'Ads Conversion Tracking',
  'Ads Conversion Tracking Troubleshooting',
  'Ads Dynamic Remarketing',
  'Ads Enhanced Conversions',
  'Ads Remarketing',
  'Ads Website Call Conversion',
  'Analytics Cross Domain Tracking',
  'Analytics Dynamic Remarketing',
  'Analytics E-Commerce Tracking',
  'Analytics Enhanced E-Commerce Tracking',
  'Analytics Event Tracking',
  'Analytics Health Check',
  'Analytics Remarketing',
  'Analytics Setup',
  'Analytics Troubleshooting',
  'Consent Mode',
  'Fix Sitewide Tagging (OGT & CT)',
  'Google Analytics 4 - Migration',
  'Google Analytics 4 E-Commerce Migration',
  'Google Tag Manager Installation'
];
const span = document.querySelectorAll('span');
const gerar = document.querySelector('#gerar');
const copy1 = document.querySelector('#copy1');

new ClipboardJS('.copy1');



//cria e popula option substatus
for (let i = 0; i < email.length; i++) {
  const option = document.createElement('option')
  option.value = email[i]
  option.innerText = email[i]
  substatus.appendChild(option)
}






const tags = document.querySelector("#tags-implement")
for (let i = 0; i < tagsImplement.length; i++) {
  const p = document.createElement('p')
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', 'tag' + [i])
  checkbox.setAttribute('name', 'tag' + [i])
  checkbox.value = tagsImplement[i]
  const label = document.createElement('label')
  label.setAttribute('for', 'tag' + [i])
  label.innerText = tagsImplement[i]
  p.appendChild(checkbox)
  p.appendChild(label)
  tags.appendChild(p)
}
const outraTag = document.querySelector('#other');
outraTag.addEventListener('click', function () {
  if (document.querySelector('#tag').checked) {
    document.querySelector('#tag').checked = false
  } else {
    document.querySelector('#tag').checked = true
  }
})
outraTag.addEventListener('input', function (e) {
  document.querySelector('#tag').value = e.target.value;
})




const bads = document.querySelector("#bads")
for (let i = 0; i < badvalue.length; i++) {
  const p = document.createElement('p')
  const checkbox = document.createElement('input')
  checkbox.setAttribute('type', 'checkbox')
  checkbox.setAttribute('id', 'bval' + [i])
  checkbox.setAttribute('name', 'bval' + [i])
  checkbox.value = badvalue[i]
  const label = document.createElement('label')
  label.setAttribute('for', 'bval' + [i])
  label.innerText = badList[i]
  p.appendChild(checkbox)
  p.appendChild(label)
  bads.appendChild(p)
}
const bad = document.querySelector('#bval-other');
bad.addEventListener('click', function () {
  if (document.querySelector('#bval').checked) {
    document.querySelector('#bval').checked = false
  } else {
    document.querySelector('#bval').checked = true
  }
})
bad.addEventListener('input', function (e) {
  document.querySelector('#bval').value = e.target.value;
})













let arrTags = []
let arrBads = []
btn[1].addEventListener('click', function () {
  




  if (document.querySelector('#oncall').value == '') {
    alert('ATENÇÂO !!!\nCampo on-call vazio ');
  }

  arrTags = []
  arrBads = []
  document.querySelectorAll('[name*=tag]').forEach((tag, i) => {
    if (tag.checked) {
      arrTags.push(tag.value)
    }
  })
  document.querySelector('#valor').value = arrTags.join(', ')


  document.querySelectorAll('[name*=bval]').forEach((bad, i) => {
    if (bad.checked) {
      arrBads.push(bad.value)
    }
  })
  document.querySelector('#bad').value = arrBads.join(', ')

  //repassa os dados do input
  span.forEach((item, idx) => {
    item.innerHTML = tagsComent[idx].value
  })
  tagsComent.forEach((item, idx) => {
    if (item.value == '') {
      span[idx].innerHTML = '-'
    }
  })


  //exibe a data atual
  exbData.innerHTML = `<b>Date:</b> ${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;

  //seleciona hotkey de acordo com o option
  const option = document.querySelectorAll('option');
  for (let i = 0; i < hotkeystr.length; i++) {
    if (option[i].selected == true) {
      if(option[i].value == 'IN - Out of Scope - Unable to Transfer' ||
        option[i].value == 'IN - Out of Scope - Email to Seller'){
          console.log('aad');
          hotkey.innerHTML = `
          <b>Hotkey:</b> <span style='color: #ff0000;'>Atenção envie o email para o anunciante (ts in oosu) e AM (ts in oos seller)</span><br>
          <p>
          <span id="copy3">ts in oosu<span>
          <button class="copy3" data-clipboard-target="#copy3">
            <i class="fa-regular fa-copy"></i>
          </button>
          </p><p>
          <span id="copy4">ts in oos seller<span>
          <button class="copy4" data-clipboard-target="#copy4">
            <i class="fa-regular fa-copy"></i>
          </button>
          </p>`
          new ClipboardJS('.copy3');
          new ClipboardJS('.copy4');
        }else{
          hotkey.innerHTML = `<p><b>Hotkey:</b> <span id="copy2">${hotkeystr[i]}<span>
          <button class="copy2" data-clipboard-target="#copy2">
            <i class="fa-regular fa-copy"></i>
          </button></p>`
          new ClipboardJS('.copy2');
        }
    }
  }



  //correção oncall
  var oncall = document.querySelector('#copy1 > p:nth-child(5) > span').innerText.split('\n')
  document.querySelector('#copy1 > p:nth-child(5) > span').innerHTML = oncall.join('<br>')

  //correção screenshot
  var screnshots = document.querySelector('#copy1 > p:nth-child(7) > span').innerText.split('\n')
  document.querySelector('#copy1 > p:nth-child(7) > span').innerHTML = screnshots.join('<br>')

  //mostra o comentario formatado
  gerar.style.display = 'block'
})


copy1.addEventListener('click', function () {
  document.querySelector('.copy1').click()
})



function msg1(){
  hotkey.addEventListener('click', () => {
    document.querySelector('.copy2').click()
  })
}

// hotkey.addEventListener('click', function () {
//   document.querySelector('.copy2').click()
// })

//fecha janela
btnfechar.addEventListener('click', function () {
  gerar.style.display = 'none'
})


// reload
btn[0].addEventListener('click', function () {
  location.reload()
})