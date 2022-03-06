---
title: 两数之和
date: 2022-03-06 23:52:05
tags:
- LeetCode
categories:
-  LeetCode
---
<!-- more -->

## 1.两数之和

**难度：** Easy

---

<p>给定一个整数数组 <code>nums</code> 和一个整数目标值 <code>target</code>，请你在该数组中找出 <strong>和为目标值 </strong><em><code>target</code></em>  的那 <strong>两个</strong> 整数，并返回它们的数组下标。</p>

<p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p>

<p>你可以按任意顺序返回答案。</p>

<p> </p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>nums = [2,7,11,15], target = 9
<strong>输出：</strong>[0,1]
<strong>解释：</strong>因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>nums = [3,2,4], target = 6
<strong>输出：</strong>[1,2]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>nums = [3,3], target = 6
<strong>输出：</strong>[0,1]
</pre>

<p> </p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>2 <= nums.length <= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code></li>
	<li><strong>只会存在一个有效答案</strong></li>
</ul>

<p><strong>进阶：</strong>你可以想出一个时间复杂度小于 <code>O(n<sup>2</sup>)</code> 的算法吗？</p>

------
## 解题思路
### 方法

#### 说明
最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 target - x。
当我们使用遍历整个数组的方式寻找 target - x 时，需要注意到每一个位于 x 之前的元素都已经和 x 匹配过，因此不需要再进行匹配。而每一个元素不能被使用两次，所以我们只需要在 x 后面的元素中寻找 target - x。


### 复杂度分析

#### 时间复杂度
O(N^2)O(N 2)，其中 NN 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次。

#### 空间复杂度
O(1)O(1)。

----
## 代码

```java
package year2022.month3.date7.no1_two_sum;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        int temp;
        for (int i = 0; i < nums.length; i++) {
            temp = target - nums[i];
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[j] == temp) {
                    result[0] = i;
                    result[1] = j;
                }
            }
        }
        return result;
    }
}
```

----

[相关链接](https://github.com/houcy7/leetcode/tree/master/src/main/year2022/month3/date7/no1_two_sum)
