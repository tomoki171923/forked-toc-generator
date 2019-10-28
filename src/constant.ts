import { Context } from '@actions/github/lib/context';

export const DEFAULT_COMMIT_MESSAGE = 'docs: Update TOC';
export const DEFAULT_TARGET_PATHS = 'README.md';
export const DEFAULT_PR_TITLE = 'docs: Update TOC';
export const TARGET_EVENTS = {
	'push': [
		(context: Context): boolean => /^refs\/heads\//.test(context.ref),
	],
	'pull_request': [
		'opened',
		'reopened',
		'synchronize',
		'labeled',
		'unlabeled',
		'closed',
	],
};