import React from "react";
import me from "../Assets/image/me4.jpg"

const Resume = () => {
  return (
    <>
      <div className="w-screen">
        <div className="w-full md:flex">
          <div className="flex-col w-full min-h-full p-20 text-center bg-gray-100 md:text-right md:w-1/3">
            <img src={me} className="rounded-full inline-block"/>
          </div>
          <div className="flex flex-wrap justify-center items-center w-full min-h-full p-20 bg-white md:justify-start md:w-2/3">
            <div className="w-full">
              <h1 className="text-4xl font-thin text-center text-purple-500 md:text-6xl md:text-left">John Moises Paunlagui</h1>
              <h2 className="w-full text-xl font-semibold text-center md:text-left">Software Engineer</h2>
              <div className ="flex-col mt-10 text-sm text-center md:text-left">
                <div>
                  <strong>phone:</strong> +63 9292263549
                </div>
                <div>
                  <strong>email:</strong> johnpaunlagui@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex">
          <div className="flex-col w-full min-h-full p-20 text-center bg-gray-100 md:text-right md:w-1/3">
            <h3 className="w-full p-0 m-0 mt-2 text-3xl font-thin md:text-right">ABOUT</h3>
            <h4 className="w-full p-0 m-0 mt-2 md:text-right">Lorem ipsum dolor</h4>
          </div>
          <div className="flex flex-wrap justify-center w-full min-h-full p-20 bg-white md:justify-start md:w-2/3">
            <div>
              <p className="block mb-5">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Phasellus hendrerit. Pellentesque aaliquet nibh nec urna. In
                nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                pretium, ligula sollicitudin laoreet viverra, tortor libero
                sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
                justo. Suspendisse potenti. Nulla vitae mauris non felis mollis
                faucibus.
              </p>
              <p className="block mb-5">
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu
                et nulla. Nulla vitae mauris non felis mollis.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:flex">
          <div className="flex-col w-full min-h-full p-20 text-center bg-gray-100 md:text-right md:w-1/3">
            <h3 className="w-full p-0 m-0 mt-2 text-3xl font-thin md:text-right">SKILL</h3>
            <h4 className="w-full p-0 m-0 mt-2 md:text-right">Lorem ipsum dolor</h4>
          </div>
          <div className="flex flex-wrap justify-center w-full min-h-full p-20 bg-white md:justify-start md:w-2/3">
            <div className="w-full pb-10 md:pr-10 md:w-1/2">
              <h4 className="mb-3 text-2xl font-light text-purple-500">HTML</h4>
              <p >
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              </p>
            </div>
            <div className="w-full pb-10 md:pr-10 md:w-1/2">
              <h4 className="mb-3 text-2xl font-light text-purple-500">CSS</h4>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              </p>
            </div>
            <div className="w-full pb-10 md:pr-10 md:w-1/2">
              <h4 className="mb-3 text-2xl font-light text-purple-500">Javascript</h4>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                vitae luctus metus libero eu augue. Morbi purus libero, faucibus
                adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
                elementum hendrerit tortor. Sed semper lorem at felis.
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
              </p>
            </div>
            <div className="w-full pb-10 md:pr-10 md:w-1/2">
              <h4 className="mb-3 text-2xl font-light text-purple-500">React</h4>
              <p>
                Sed egestas, ante et vulputate volutpat, eros pede semper est,
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna. Fusce lacinia arcu
                et nulla. Nulla vitae mauris non felis mollis.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:flex">
          <div className="flex-col w-full min-h-full p-20 text-center bg-gray-100 md:text-right md:w-1/3">
            <h3 className="w-full p-0 m-0 mt-2 text-3xl font-thin md:text-right">EXPERIENCE</h3>
            <h4 className="w-full p-0 m-0 mt-2 md:text-right">Lorem ipsum dolor</h4>
          </div>
          <div className="flex flex-wrap justify-center w-full min-h-full p-20 bg-white md:justify-start md:w-2/3">
            <div className="items-start w-full pb-10 space-x-5 md:flex">
              <div className="px-3 py-2 bg-gray-100 rounded md:w-1/3">
                <h5 className="p-0 m-0 text-sm text-gray-500">2018 - Today</h5>
                <h4 className="p-0 m-0 font-light text-purple-500">Webeetle</h4>
              </div>
              <div className="mt-5 md:mt-0 md:w-2/3">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
            <div className="items-start w-full pb-10 space-x-5 md:flex">
              <div className="w-full px-3 py-2 bg-gray-100 rounded md:w-1/3">
                <h5 className="p-0 m-0 text-sm text-gray-500">2008 - 2018</h5>
                <h4 className="p-0 m-0 font-light text-purple-500">Google</h4>
              </div>
              <div className="mt-5 md:mt-0 md:w-2/3">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
            <div className="items-start w-full pb-10 space-x-5 md:flex">
              <div className="w-full px-3 py-2 bg-gray-100 rounded md:w-1/3">
                <h5 className="p-0 m-0 text-sm text-gray-500">2003 - 2008</h5>
                <h4 className="p-0 m-0 font-light text-purple-500">Microsoft</h4>
              </div>
              <div className="mt-5 md:mt-0 md:w-2/3">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex">
          <div className="flex-col w-full min-h-full p-20 text-center bg-gray-100 md:text-right md:w-1/3">
            <h3 className="w-full p-0 m-0 mt-2 text-3xl font-thin md:text-right">EDUCATION</h3>
            <h4 className="w-full p-0 m-0 mt-2 md:text-right">Lorem ipsum dolor</h4>
          </div>
          <div className="flex flex-wrap justify-center w-full min-h-full p-20 bg-white md:justify-start md:w-2/3">
            <div className="items-start w-full pb-10 space-x-5 md:flex">
              <div className="w-full px-3 py-2 bg-gray-100 rounded md:w-1/3">
                <h5 className="p-0 m-0 text-sm text-gray-500">2008 - 2012</h5>
                <h4 className="p-0 m-0 font-light text-purple-500">University of Salerno</h4>
              </div>
              <div className="mt-5 md:mt-0 md:w-2/3">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
            <div className="items-start w-full pb-10 space-x-5 md:flex">
              <div className="w-full px-3 py-2 bg-gray-100 rounded md:w-1/3">
                <h5 className="p-0 m-0 text-sm text-gray-500">2003 - 2008</h5>
                <h4 className="p-0 m-0 font-light text-purple-500">Professional Course</h4>
              </div>
              <div className="mt-5 md:mt-0 md:w-2/3">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing, commodo quis, gravida id, est. Sed
                  lectus. Praesent elementum hendrerit tortor. Sed semper lorem
                  at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi
                  neque euismod
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
