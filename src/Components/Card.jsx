import React, { useState } from "react";

export function Card({ img, video, heading, git, be, netlify }) {
  const hasVideo = Boolean(video);
  const hasButton = Boolean(be);

  return (
    <>
      <div className="project-card py-3">
        {hasVideo ? (
          <video className="rounded-2" src={video} muted loop autoPlay></video>
        ) : (
          <img
            src={img}
            className="rounded-2"
            style={{ width: "20.5rem" }}
            alt="swastic"
          />
        )}
        <h4 className="mt-3">{heading}</h4>
        
        {hasButton ? (
           <><button className="btn rounded-3 border-1 mt-2 bg-dark">
            <a href={git} target="_blank">
              FrontEnd
            </a>
          </button><span>
              <button className="btn mx-2 mt-2 rounded-3 border-1 bg-dark">
                <a href={netlify} target="_blank" >
                  View Site
                </a>
              </button>
            </span><span>
              <button className="btn mt-2 rounded-3 border-1 bg-dark">
                <a href={be} target="_blank" >
                  BackEnd
                </a>
              </button>
            </span></>
        ) : (
          <><button className="btn rounded-3 border-1 mx-3 mt-2 bg-dark">
              <a href={git} target="_blank" >
                GitHub
              </a>
            </button><span>
                <button className="btn mx-3 mt-2 rounded-3 border-1 bg-dark">
                  <a href={netlify} target="_blank" >
                    View Site
                  </a>
                </button>
              </span></>
        )}
      </div>
    </>
  );
}
