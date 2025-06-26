import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  blogs: any[] = [];
  newBlog = {
    title: '',
    content: '',
    imageUrl: ''
  };

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs() {
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    });
  }

  postBlog() {
    this.blogService.postBlog(this.newBlog).subscribe(() => {
      this.newBlog = { title: '', content: '', imageUrl: '' };
      this.loadBlogs();
    });
  }
}
