import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor(public firebaseService: FirebaseService, public router: Router) { }

  posts = [
    {
      _id: "postid_1",
      title: "Post Title 1",
      type: "Project",
      cover: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      tech_stack: ["Angular", "MongoDB", "Node.js", "Express.js", "Firebase"],
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      last_date: "20 Jun, 2021"
    },
    {
      _id: "postid_2",
      title: "Post Title 2",
      type: "Hackathon",
      cover: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      tech_stack: ["Angular", "MongoDB", "Node.js", "Express.js", "Firebase"],
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      last_date: "20 Jun, 2021"
    },
    {
      _id: "postid_3",
      title: "Post Title 3",
      type: "Internship",
      cover: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      tech_stack: ["Angular", "MongoDB", "Node.js", "Express.js", "Firebase"],
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      last_date: "20 Jun, 2021"
    },
    {
      _id: "postid_4",
      title: "Post Title 4",
      type: "Project",
      cover: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      tech_stack: ["Angular", "MongoDB", "Node.js", "Express.js", "Firebase"],
      description: "Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.",
      last_date: "20 Jun, 2021"
    }
  ]

  ngOnInit(): void { }

}
