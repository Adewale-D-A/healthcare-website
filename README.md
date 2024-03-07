# Next_JS_Website

This is the Next_js application for 7th Care.

## Maintenance

This website is written in Typescript using Next.JS react library framework which was selected majorly for SEO optimization. To work and maintain this website, the developer must have substantial knowledge on TailwindCSS (CSS library) for styling and Next 14 framework.

>

 <table>
    <tr>
      <th>Task</th>
      <th>Docker command</th>
    </tr>
    <tr>
      <td>Build a docker image using docker compose</td>
      <td>docker-compose build</td>
    </tr>
    <tr>
      <td>Run the image locally</td>
      <td>docker run -d -p 8080:3000 --name care-website care-website:v1.1.3</td>
    </tr>
    <tr>
      <td>Push Docker image to Dockerhub</td>
      <td>docker tag care-website:v1.1.3 adewaleda/care-website:v1.1.3</td>
    </tr>
    <tr>
      <td></td>
      <td>docker push adewaleda/care-website:v1.1.3</td>
    </tr>
    <tr>
      <td>Pull image from DockerHub</td>
      <td>docker pull adewaleda/care-website:v1.1.3</td>
    </tr>
    </table>

 <table>
    <tr>
      <th>Package Name</th>
      <th>Use In App</th>
    </tr>
    <tr>
      <td>tailwindcss</td>
      <td>styling library for ease in maintenance</td>
    </tr>
    <tr>
      <td>@headlessui/react</td>
      <td>modals and accordions ui library</td>
    </tr>
    <tr>
      <td>framer-motion</td>
      <td>page transition and div animation library</td>
    </tr>
</table>

> <a href="https://7th-care.vercel.app/" target="_blank">Visit</a>
