<h1 align="center">Clock App</h1>
<h2>Installing</h2>
<p>Preliminary requirements:</p>
<ul>
    <li><a href="https://nodejs.org/">Node.js</a> >= <code>16.14.2</code></li>
    <li><a href="https://www.npmjs.com/">npm</a> >= <code>8.16.0</code></li>
    <li><a href="https://www.docker.com/">Docker</a> >= <code>20.10.14</code></li>
    <li><a href="https://docs.docker.com/compose/">docker-compose</a> >= <code>1.29.2</code></li>
    <li><a href="https://www.gnu.org/software/make/">GNU Make</a> >= <code>3.81</code></li>
</ul>
<p>Installing dependencies:</p>
<pre>npm i</pre>
<h2>Building</h2>
<p>Building backend:</p>
<pre>npm run build</pre>
<p>Building frontend:</p>
<pre>npm run frontend:build</pre>
<h2>Starting</h2>
<p>Starting in production mode:</p>
<pre>npm start</pre>
<p>Starting in development mode:</p>
<pre>npm run dev</pre>
<h2>Environment variables</h2>
<p>List of variables:</p>
<ul>
    <li><code>WEBPACK_DEV</code> - Webpack middleware starting if 1. Default: 0.</li>
    <li><code>PORT</code> - Server port listening. Default: 80.</li>
</ul>
<p><a href="https://www.npmjs.com/package/dotenv">Dotenv</a> support is present!</p>
<h2>Code formatting</h2>
<p>Backend code formatting:</p>
<pre>npm run format</pre>
<p>Frontend code formatting:</p>
<pre>npm run frontend:format</pre>
<h2>Deploy</h2>
<p>Building image:</p>
<pre>make build</pre>
<p>Pushing image:</p>
<pre>make push</pre>
<p>Pulling image:</p>
<pre>make pull</pre>
<p>Staring image:</p>
<pre>make run</pre>
<p>Stopping image:</p>
<pre>make stop</pre>
<h2>Stack</h2>
<p>General stack:</p>
<p>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />
    <img src="https://img.shields.io/badge/prettier-%23F7B93E.svg?&style=for-the-badge&logo=prettier&logoColor=black" />
</p>
<p>Frontend stack:</p>
<p>
    <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
    <img src="https://img.shields.io/badge/mobx-%23FF9955.svg?&style=for-the-badge&logo=mobx&logoColor=black" />
    <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" />
    <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
    <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" />
</p>
<p>Backend stack:</p>
<p>
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />   
</p>
<h2>License</h2>
<p><a href="./LICENSE">MIT</a></p>