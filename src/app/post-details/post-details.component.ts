import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post_id: string;

  post = {
    title: "Post Title 1",
    cover: "https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    type: "Project",
    last_date: "20 Jul, 2021",
    tech_stack: ["Fluttter", "MongoDB", "Express.js", "Node.js", "Arduino"],
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptate velit et officiis consequuntur commodi tenetur odit ab dicta fuga magnam, impedit necessitatibus esse sint hic eius quibusdam quae facilis quod doloremque reiciendis minus perferendis, eos aspernatur. Minima voluptas magni sunt quisquam nostrum dolor quos! Culpa quas quae debitis ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis, ducimus cupiditate harum accusamus nesciunt culpa veritatis! Aspernatur dignissimos, architecto modi aperiam omnis, ratione non minus quibusdam enim excepturi, ullam odio illo numquam vel provident voluptatem atque. Quas voluptatem sit doloremque repellat ducimus ea ullam voluptas accusantium placeat commodi obcaecati id reprehenderit, deleniti hic quod cupiditate explicabo reiciendis. Repellendus facilis consectetur reiciendis exercitationem rerum, autem provident ex. Sint, enim sit!",
    roles: [
      {
        role_title: "Role 1",
        responsibilities: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda odio laudantium iusto nam molestiae placeat, veritatis magni? Consequuntur, architecto, doloribus molestias nulla saepe similique repudiandae assumenda sint id rem ut!"
      },
      {
        role_title: "Role 2",
        responsibilities: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda odio laudantium iusto nam molestiae placeat, veritatis magni? Consequuntur, architecto, doloribus molestias nulla saepe similique repudiandae assumenda sint id rem ut!"
      }
    ],
    team_size: "6",
    deadline: "07 Aug, 2021",
    eligible_years: "1, 2, 3",
    own_college: true
  }

  user = {
    name: "Kevin Parker",
    avatar: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
    college: "S.R.M Institute of Science and Technology",
    year: "IV"
  }

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.post_id = this.activatedRoute.snapshot.params['postid'];
  }

}
