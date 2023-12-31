// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export interface ReactionRecord {
	'+1': number;
	'-1': number;
	confused: number;
	eyes: number;
	heart: number;
	hooray: number;
	laugh: number;
	rocket: number;
	total_count: number;
	url: string;
}

export interface GHLink {
	href: string;
}

export interface Label {
	color: string;
	default: boolean;
	description: string;
	id: number;
	name: string;
	node_id: string;
	url: string;
}

export interface GHUser {
	avatar_url: string;
	events_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	html_url: string;
	id: number;
	login: string;
	node_id: string;
	organizations_url: string;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	type: 'User';
	url: string;
}

export interface Issue {
	active_lock_reason: null;
	assignee: GHUser;
	assignees: GHUser[];
	author_association: string;
	body: string;
	closed_at: null;
	comments: number;
	comments_url: string;
	created_at: string;
	events_url: string;
	html_url: string;
	id: number;
	labels: Label[];
	labels_url: string;
	locked: false;
	milestone: null;
	node_id: string;
	number: number;
	performed_via_github_app: null;
	reactions: ReactionRecord;
	repository_url: string;
	state: string;
	state_reason: null;
	timeline_url: string;
	title: 'Paris';
	updated_at: string;
	url: string;
	user: GHUser;
}

export interface Repository {
	id: number;
	node_id: string;
	name: string;
	full_name: string;
	private: boolean;
	owner: GHUser;
	html_url: string;
	description: null;
	fork: boolean;
	url: string;
	forks_url: string;
	keys_url: string;
	collaborators_url: string;
	teams_url: string;
	hooks_url: string;
	issue_events_url: string;
	events_url: string;
	assignees_url: string;
	branches_url: string;
	tags_url: string;
	blobs_url: string;
	git_tags_url: string;
	git_refs_url: string;
	trees_url: string;
	statuses_url: string;
	languages_url: string;
	stargazers_url: string;
	contributors_url: string;
	subscribers_url: string;
	subscription_url: string;
	commits_url: string;
	git_commits_url: string;
	comments_url: string;
	issue_comment_url: string;
	contents_url: string;
	compare_url: string;
	merges_url: string;
	archive_url: string;
	downloads_url: string;
	issues_url: string;
	pulls_url: string;
	milestones_url: string;
	notifications_url: string;
	labels_url: string;
	releases_url: string;
	deployments_url: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	git_url: string;
	ssh_url: string;
	clone_url: string;
	svn_url: string;
	homepage: string | null;
	size: number;
	stargazers_count: number;
	watchers_count: number;
	language: null;
	has_issues: boolean;
	has_projects: boolean;
	has_downloads: boolean;
	has_wiki: boolean;
	has_pages: boolean;
	has_discussions: boolean;
	forks_count: number;
	mirror_url: null;
	archived: boolean;
	disabled: boolean;
	open_issues_count: number;
	license: null;
	allow_forking: boolean;
	is_template: boolean;
	web_commit_signoff_required: boolean;
	topics: [];
	visibility: string;
	forks: number;
	open_issues: number;
	watchers: number;
	default_branch: string;
	temp_clone_token: null;
	network_count: number;
	subscribers_count: number;
	parent?: Repository;
	source?: Repository;
}

export interface Ref {
	ref: string;
	node_id: string;
	url: string;
	object: {
		type: string;
		sha: string;
		url: string;
	};
}

export interface Comment {
	author_association: string;
	body: string;
	created_at: string;
	html_url: string;
	id: number;
	issue_url: string;
	node_id: string;
	performed_via_github_app: null;
	reactions: ReactionRecord;
	updated_at: string;
	url: string;
	user: GHUser;
}

export interface PullRequest {
	active_lock_reason: null;
	assignee: null;
	assignees: GHUser[];
	author_association: string;
	auto_merge: null;
	base: { label: string; ref: string; sha: string; user: GHUser; repo: Repository };
	body: string;
	closed_at: string | null;
	comments_url: string;
	commits_url: string;
	created_at: string;
	diff_url: string;
	draft: boolean;
	head: { label: string; ref: string; sha: string; user: GHUser; repo: Repository };
	html_url: string;
	id: number;
	issue_url: string;
	labels: Label[];
	locked: boolean;
	merge_commit_sha: string;
	merged_at: null;
	milestone: null;
	node_id: string;
	number: number;
	patch_url: string;
	requested_reviewers: [];
	requested_teams: [];
	review_comment_url: string;
	review_comments_url: string;
	state: string;
	statuses_url: string;
	title: string;
	updated_at: string;
	url: string;
	user: GHUser;
	_links: {
		self: GHLink;
		html: GHLink;
		issue: GHLink;
		comments: GHLink;
		review_comments: GHLink;
		review_comment: GHLink;
		commits: GHLink;
		statuses: GHLink;
	};
}

export interface Reaction {
	id: number;
	node_id: string;
	user: GHUser;
	content: string;
	created_at: string;
}

export interface Label {
	id: number;
	node_id: string;
	url: string;
	name: string;
	description: string;
	color: string;
	default: boolean;
}