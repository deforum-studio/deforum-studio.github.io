fetch('https://api.github.com/repos/deforum-art/sd-webui-deforum')
    .then(response => response.json())
    .then(data => document.getElementById('star-count1').innerHTML = `<span class="star">☆</span> ${data.stargazers_count}`);

    fetch('https://api.github.com/repos/deforum-art/sd-webui-deforum/commits')
    .then(response => response.json())
    .then(data => {
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById('commit-date1').textContent = `Updated ${lastCommitDate.toDateString()}`;
    });

fetch('https://api.github.com/repos/deforum-art/deforum-stable-diffusion')
    .then(response => response.json())
    .then(data => document.getElementById('star-count2').innerHTML = `<span class="star">☆</span> ${data.stargazers_count}`);

    fetch('https://api.github.com/repos/deforum-art/deforum-stable-diffusion/commits')
    .then(response => response.json())
    .then(data => {
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById('commit-date2').textContent = `Updated ${lastCommitDate.toDateString()}`;
    });

fetch('https://api.github.com/repos/rewbs/sd-parseq')
    .then(response => response.json())
    .then(data => document.getElementById('star-count3').innerHTML = `<span class="star">☆</span> ${data.stargazers_count}`);

    fetch('https://api.github.com/repos/rewbs/sd-parseq/commits')
    .then(response => response.json())
    .then(data => {
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById('commit-date3').textContent = `Updated ${lastCommitDate.toDateString()}`;
    });

fetch('https://api.github.com/repos/XmYx/ainodes-engine')
    .then(response => response.json())
    .then(data => document.getElementById('star-count4').innerHTML = `<span class="star">☆</span> ${data.stargazers_count}`);

    fetch('https://api.github.com/repos/XmYx/ainodes-engine/commits')
    .then(response => response.json())
    .then(data => {
    const lastCommitDate = new Date(data[0].commit.author.date);
    document.getElementById('commit-date4').textContent = `Updated ${lastCommitDate.toDateString()}`;
    });